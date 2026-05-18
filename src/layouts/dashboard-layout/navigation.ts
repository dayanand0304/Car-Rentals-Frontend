import {
  LayoutDashboard,
  Car,
  Users,
  FileText,
} from "lucide-react";

export const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    roles: ["ADMIN", "EMPLOYEE"],
  },
  {
    title: "Cars",
    href: "/cars",
    icon: Car,
    roles: ["ADMIN", "EMPLOYEE"],
  },
  {
    title: "Customers",
    href: "/customers",
    icon: Users,
    roles: ["ADMIN"],
  },
  {
    title: "Rentals",
    href: "/rentals",
    icon: FileText,
    roles: ["ADMIN", "EMPLOYEE"],
  },
];