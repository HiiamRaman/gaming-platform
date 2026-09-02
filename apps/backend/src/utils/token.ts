import jwt from "jsonwebtoken";
import { ApiError } from "./ApiError.js";

export const generateAccessToken = (userId: string) => {
  if (!process.env.ACCESS_TOKEN_SECRET) {
    throw new ApiError(500, "AccessToken is missing");
  }

  return jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY || "15m",
  } as any);
};

export const generateRefreshToken = (userId: string) => {
  if (!process.env.REFRESH_TOKEN_SECRET) {
    throw new ApiError(500, "Refresh Token is missing ");
  }

  return jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY || "7d",
  } as any);
};
