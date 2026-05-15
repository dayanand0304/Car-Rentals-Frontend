import { useMutation } from "@tanstack/react-query";

import { toast } from "sonner";

import {
  login,
  register,
} from "../services/auth.service";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: login,

    onSuccess: () => {
      toast.success("Login successful");
    },

    onError: () => {
      toast.error("Invalid credentials");
    },
  });
};

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: register,

    onSuccess: () => {
      toast.success("Registration successful");
    },

    onError: () => {
      toast.error("Registration failed");
    },
  });
};