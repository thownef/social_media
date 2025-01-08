import Navbar from "@/shared/layouts/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-screen bg-[#faf9f7]">
      <Navbar/>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
