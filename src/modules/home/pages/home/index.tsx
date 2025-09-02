import News from "@/modules/home/components/News/News";
import LeftSidebar from "@/modules/home/components/Sidebar/LeftSidebar";
import RightSidebar from "@/modules/home/components/Sidebar/RightSidebar";

const HomePage = () => {
  return (
    <div className="flex px-10 gap-6">
      <div className="flex-3/10 sticky top-[76px] self-start">
        <LeftSidebar />
      </div>
      <div className="flex-2/5">
        <News />
      </div>
      <div className="flex-3/10 sticky top-[76px] self-start">
        <RightSidebar />
      </div>
    </div>
  );
};

export default HomePage;
