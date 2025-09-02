import Navbar from "@/shared/layouts/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-[var(--background-color)]">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
