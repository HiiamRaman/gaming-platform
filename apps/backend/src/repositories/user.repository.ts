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

export async function updateRefreshToken(userId: string, refreshToken: string|null) {
  return await prisma.user.update({
    where: { id: userId },
    data: { refreshToken },
  });
}


