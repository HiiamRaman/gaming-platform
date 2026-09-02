import type { Request, Response } from "express";

import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { registerUser, loginUser } from "../services/auth.service.js";

export const registerUserController = asyncHandler(
  async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    //validate

    if (!username || !email || !password) {
      throw new ApiError(404, "All-Feilds are required!!");
    }
    //pass data to servie layer

    const createdUser = await registerUser(username, email, password);
    return res
      .status(201)
      .json(new ApiResponse(201, "User registered Successfully", createdUser));
  },
);

export const loginController = asyncHandler(
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new ApiError(400, "Email and password are required");
    }

    const { user, accessToken, refreshToken } = await loginUser(
      email,
      password,
    );
    const accessTokenOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict" as const,
      maxAge: 15 * 60 * 1000, // 15 minutes
    };
    const refreshTokenOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSIte: "strict" as const,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    };
    return res
      .status(200)
      .cookie("accessToken", accessToken, accessTokenOptions)
      .cookie("refreshToken", refreshToken, refreshTokenOptions)
      .json(new ApiResponse(200, "User logged in successfully", user));
  },
);


