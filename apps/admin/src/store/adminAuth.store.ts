import { create } from 'zustand';

interface AdminUser {
  id: string;
  username: string;
  role: string;
}

interface AdminAuthState {
  user: AdminUser | null;
  token: string | null;
  isAuthenticated: boolean;
  setAuth: (user: AdminUser, token: string) => void;
  logout: () => void;
  initialize: () => void;
}

export const useAdminAuth = create<AdminAuthState>()((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,

  setAuth: (user, token) => {
    localStorage.setItem('admin_token', token);
    set({ user, token, isAuthenticated: true });
  },

  logout: () => {
    localStorage.removeItem('admin_token');
    set({ user: null, token: null, isAuthenticated: false });
  },

  // Call this when the app first loads to check if they are already logged in
  initialize: () => {
    const token = localStorage.getItem('admin_token');
    if (token) {
      // In a full production app, you would verify this token with the backend here
      // For now, we will just assume if the token exists, they are authenticated
      set({ token, isAuthenticated: true });
    }
  },
}));
