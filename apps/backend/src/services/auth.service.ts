import bcrypt from "bcrypt";
import {
  findUserByEmail,
  findUserByUsername,
  createUser,
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
