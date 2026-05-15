import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 border-r p-4">
        Sidebar
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;