import type { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/ApiError.js";
import { Role } from "@prisma/client";

export const authorize =
  (...roles: Role[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return next(new ApiError(401, "Authentication required."));
    }

    if (!roles.includes(req.user.role as Role)) {
      return next(
        new ApiError(403, "You are not authorized to access this resource.")
      );
    }

    next();
  };