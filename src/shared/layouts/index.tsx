import Navbar from "@/shared/layouts/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <Navbar/>
      <div className="bg-[#faf9f7]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
