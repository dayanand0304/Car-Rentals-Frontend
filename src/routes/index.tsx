import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "@/features/auth/layouts/auth-layout";
import LoginPage from "@/features/auth/pages/login-page";
import RegisterPage from "@/features/auth/pages/register-page";

import ProtectedRoute from "@/shared/components/protected-route";

import DashboardLayout from "@/shared/layouts/dashboard-layout";

import DashboardPage from "@/features/dashboard/pages/dashboard-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  {
  element: <ProtectedRoute />,
  children: [
    {
      element: <DashboardLayout />,
      children: [
        {
          path: "/dashboard",
          element: <DashboardPage />,
        },
      ],
    },
  ],
}
]);