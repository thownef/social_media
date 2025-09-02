import { Outlet } from "react-router-dom";

const MessagesLayout = () => {
  return (
    <div className="h-screen bg-[#f3f3f3]">
      <Outlet />
    </div>
  );
};

export default MessagesLayout;
