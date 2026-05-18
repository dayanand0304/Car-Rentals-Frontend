import { Button } from "@/components/ui/button";

import MobileSidebar from "./MobileSidebar";

import { useNavigate } from "react-router-dom";

import { useAuthStore } from "@/features/auth/store/auth.store";

const Navbar = () => {

  const { user } = useAuthStore();
  const navigate = useNavigate();

  const logout = useAuthStore(
    (state) => state.logout
  );

  const handleLogout = () => {
  logout();

  navigate("/login");
};
  return (
    <header
      className="
        flex h-16 items-center
        justify-between
        border-b bg-background
        px-6
      "
    >
      <MobileSidebar />
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-medium">
            {user?.customerName || user?.customerEmail}
          </p>

          <p className="text-xs text-muted-foreground">
            {user?.role}
          </p>
        </div>
        <Button
        variant="outline"
        onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </header>
  );
};

export default Navbar;