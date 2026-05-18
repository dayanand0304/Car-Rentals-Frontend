import { Button } from "@/components/ui/button";

import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  return (
    <header
      className="
        flex h-16 items-center
        justify-between
        border-b
        px-6
      "
    >
      <div className="flex items-center gap-4">
        <MobileSidebar />

        <h1 className="text-lg font-semibold">
          Car Rentals Platform
        </h1>
      </div>

      <Button variant="outline">
        Logout
      </Button>
    </header>
  );
};

export default Navbar;