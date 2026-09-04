import { apiClient } from "./api.client";

export const authService = {
  async login(credentials: { identifier: string; password: string }) {
    const response = await apiClient.post("/auth/login", credentials);
    return response.data; // Server sets the secure cookie automatically
  },

  async register(userData: {
    username: string;
    email: string;
    password: string;
  }) {
    const response = await apiClient.post("/auth/register", userData);
    return response.data;
  },

  async getProfile() {
    const response = await apiClient.get("/auth/me");
    return response.data.user;
  },

  async logout() {
    await apiClient.post("/auth/logout"); // Tells backend to clear the cookie
  },
};
