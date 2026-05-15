import axios from "axios";
import { toast } from "sonner";
import { useAuthStore } from "@/features/auth/store/auth.store";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

console.log("API URL:", import.meta.env.VITE_API_BASE_URL);

axiosInstance.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response?.status === 401) {
      const logout =
        useAuthStore.getState().logout;

      logout();

      toast.error(
        "Session expired. Please login again."
      );

      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;