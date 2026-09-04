import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  timeout: 10000,
  withCredentials: true, // CRITICAL: Tells Axios to send and receive HttpOnly cookies automatically
  headers: {
    "Content-Type": "application/json",
  },
});
