import { create } from "zustand";
import type { UserSession } from "../../../../packages/shared/types/auth";
import { authService } from "../services/auth.service";

interface AuthState {
  user: UserSession | null;
  isLoading: boolean;
  error: string | null;
  fetchProfile: () => Promise<void>;
  login: (identifier: string, pass: string) => Promise<boolean>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  isLoading: false,
  error: null,

  fetchProfile: async () => {
    set({ isLoading: true, error: null });
    try {
      const user = await authService.getProfile();
      set({ user, isLoading: false });
    } catch {
      set({ user: null, isLoading: false });
    }
  },

  login: async (identifier, password) => {
    set({ isLoading: true, error: null });
    try {
      await authService.login({ identifier, password });
      const user = await authService.getProfile();
      set({ user, isLoading: false });
      return true;
    } catch (err: any) {
      set({
        error: err.response?.data?.message || "Login failed",
        isLoading: false,
      });
      return false;
    }
  },

  logout: async () => {
    try {
      await authService.logout();
    } finally {
      set({ user: null });
    }
  },
}));
