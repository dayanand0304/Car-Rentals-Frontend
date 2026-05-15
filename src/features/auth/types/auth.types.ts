export interface User {
  id: number;
  customerName: string;
  customerEmail: string;
  role: string;
}

export interface LoginRequest {
  customerEmail: string;
  password: string;
}

export interface RegisterRequest {
  customerName: string;
  customerEmail: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}