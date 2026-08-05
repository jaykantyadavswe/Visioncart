import prisma from "../config/prisma.js";
import { comparePassword, hashPassword } from "../utils/password.js";
import type { RegisterInput, LoginInput } from "../validations/auth.validation.js";
import { ApiError } from "../utils/ApiError.js";
import { generateAccessToken, generateRefreshToken  } from "../utils/jwt.js";

export const registerUser = async ({name, email, password}: RegisterInput) => {
  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    throw new ApiError(400, "User already exists.");
  }

  const hashedPassword = await hashPassword(password);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });

  return user;
};


export const loginUser = async({
  email, password
}: LoginInput) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new ApiError(401, "Invalid email or password.");
  }

  const isPasswordCorrect = await comparePassword(
    password,
    user.password
  );

  if (!isPasswordCorrect) {
    throw new ApiError(401, "Invalid email or password.");
  }

  const accessToken = generateAccessToken(
    user.id,
    user.role
  );

  const refreshToken = generateRefreshToken(
    user.id
  );

  return {
    accessToken,
    refreshToken,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
};

export const getCurrentUserService = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!user) {
    throw new ApiError(404, "User not found.");
  }

  return user;
};