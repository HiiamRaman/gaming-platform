import prisma from "../lib/prisma.js";

export async function findUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

export async function findUserByUsername(username: string) {
  return prisma.user.findUnique({
    where: { username },
  });
}

export async function createUser(
  username: string,
  email: string,
  hashedPassword: string,
) {
  return prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });
}
