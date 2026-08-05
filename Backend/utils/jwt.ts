import jwt from "jsonwebtoken";

const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET!;
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET!;

export const generateAccessToken = (
    userId: string,
    role: string
) => {
    return jwt.sign(
        { userId, role },
        ACCESS_SECRET,  
        {
            expiresIn: "15m",
        }
    );
};


export const generateRefreshToken = (
    userId: string
) => {
    return jwt.sign(
        { userId },
        REFRESH_SECRET,
        {
            expiresIn: "7d",
        }
    );
};

export interface JwtPayload {
    userId: string;
    role: string;
}

export const verifyAccessToken = (
    token: string
): JwtPayload => {
    return jwt.verify(
        token,
        ACCESS_SECRET
    ) as JwtPayload;
};