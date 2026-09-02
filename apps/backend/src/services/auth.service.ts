import bcrypt from "bcrypt";
import { generateAccessToken, generateRefreshToken } from "../utils/token.js";
import {
  findUserByEmail,
  findUserByUsername,
  createUser,
  updateRefreshToken,
} from "../repositories/user.repository.js";
import { ApiError } from "../utils/ApiError.js";


export async function registerUser(
  username: string,
  email: string,
  password: string,
) {
  //check if the email is already taken
  const existingEmail = await findUserByEmail(email);
  if (existingEmail) {
    throw new ApiError(409, "Email is already taken");
  }
  //check if the username is already takenn

  const existingUsername = await findUserByUsername(username);
  if (existingUsername) {
    throw new ApiError(409, "username is already taken ");
  }
  //hash the password
  const saltRound = 10;
  const hashedPassword = await bcrypt.hash(password, saltRound);

  const newUser = await createUser(username, email, hashedPassword);
  if (!newUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }
  const { password: _, ...userWithoutPassword } = newUser;
  return userWithoutPassword;
}

export async function loginUser(email: string, password: string) {
  //find user by email
  const user = await findUserByEmail(email);
  if (!user) {
    throw new ApiError(401, "invalid email or password");
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid Email or Password");
  }
  // generates token using utility
  const accessToken = generateAccessToken(user.id);
  const refreshToken = generateRefreshToken(user.id);
  //update refreshToken

  await updateRefreshToken(user.id, refreshToken);
  const { password: _, ...userWithoutPassword } = user;

  return {
    user: userWithoutPassword,
    accessToken,
    refreshToken,
  };
}
