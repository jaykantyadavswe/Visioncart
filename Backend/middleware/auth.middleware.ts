import type { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../utils/jwt.js";
import { ApiError } from "../utils/ApiError.js";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.accessToken;

    if (!token) {
      throw new ApiError(401, "Authentication required.");
    }

    const payload = verifyAccessToken(token);

    req.user = payload;

    next();
  } catch {
    next(new ApiError(401, "Invalid or expired token."));
  }
};