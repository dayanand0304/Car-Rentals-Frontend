import { Navigate } from "react-router-dom";

import { useAuthStore } from "@/features/auth/store/auth.store";

interface RoleGuardProps {
  allowedRoles: string[];

  children: React.ReactNode;
}

const RoleGuard = ({
  allowedRoles,
  children,
}: RoleGuardProps) => {
  const user = useAuthStore(
    (state) => state.user
  );

  if (
    !user ||
    !allowedRoles.includes(user.role)
  ) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default RoleGuard;