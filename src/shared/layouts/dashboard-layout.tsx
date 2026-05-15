import { Outlet, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

import { useAuthStore } from "@/features/auth/store/auth.store";

const DashboardLayout = () => {
  const navigate = useNavigate();

  const logout = useAuthStore(
    (state) => state.logout
  );

  const handleLogout = () => {
    logout();

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 border-r p-4 space-y-4">
        <h2 className="text-xl font-bold">
          Rental Hub
        </h2>

        <Button
          variant="destructive"
          className="w-full"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;