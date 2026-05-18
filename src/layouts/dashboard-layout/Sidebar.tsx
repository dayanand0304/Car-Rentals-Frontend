// src/layouts/dashboard-layout/Sidebar.tsx

import { NavLink } from "react-router-dom";
import { navigation } from "./navigation";
import { useAuthStore } from "@/features/auth/store/auth.store";

const Sidebar = () => {
  const { user } = useAuthStore();
  return (
    <aside
      className="
        hidden md:flex
        h-screen
        w-64
        flex-col
        border-r
        bg-background
      "
    >
      <div>
        <h2 className="text-xl font-bold">
          Car Rentals
        </h2>

        <p className="text-sm text-muted-foreground">
          Management Platform
        </p>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {navigation
          .filter((item) =>
          item.roles.includes(user?.role || "")
        ).map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `
                flex items-center gap-3
                rounded-lg px-3 py-2
                transition-colors
                ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "hover:bg-muted"
                }
              `
              }
            >
              <Icon className="h-5 w-5" />

              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;