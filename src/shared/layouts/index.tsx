import Navbar from "@/shared/layouts/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
