import axiosInstance from "@/shared/lib/axios";
import {
  type LoginRequest,
  type RegisterRequest,
  type AuthResponse,
} from "../types/auth.types";

export const login = async (
  data: LoginRequest
): Promise<AuthResponse> => {
  const response = await axiosInstance.post("/auth/login", data);
  return response.data;
};

export const register = async (
  data: RegisterRequest
): Promise<AuthResponse> => {
  const response = await axiosInstance.post("/auth/register", data);
  return response.data;
};