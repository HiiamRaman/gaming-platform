import type { Request, Response } from "express";

import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { registerUser } from "../services/auth.service.js";

export const registerUserController = asyncHandler(async (req: Request, res: Response) => {
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
});
