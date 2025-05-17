import Navbar from "@/shared/layouts/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="h-screen bg-[#f3f3f3]">
      <Navbar/>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
