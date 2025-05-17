import Navigation from "@/modules/messages/components/Navigation/Navigation";
import Conservation from "@/modules/messages/components/Conservation/Conservation";

const Sidebar = () => {
  return (
    <div className="flex h-full">
      <Navigation />
      <Conservation />
    </div>
  );
};

export default Sidebar;
