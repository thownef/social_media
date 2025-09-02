import { useCallback, useState } from "react";
import { cn } from "@/shared/utils/cn";
import { menuLeftList } from "@/modules/home/core/config/column/menu-left";
import { HomeIcon, UserIcon, ChatBubbleLeftRightIcon, BellIcon } from "@heroicons/react/24/outline";
import bgDefault from "/assets/img/background_default.png";

const LeftSidebar = () => {
  const [activeMenu, setActiveMenu] = useState("home");

  const handleMenuClick = useCallback((menuId: string) => {
    return () => {
      setActiveMenu(menuId);
    };
  }, []);

  const renderIcon = (iconName: string) => {
    const iconMap = {
      HomeIcon: HomeIcon,
      UserIcon: UserIcon,
      ChatBubbleLeftRightIcon: ChatBubbleLeftRightIcon,
      BellIcon: BellIcon,
    };

    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return IconComponent ? <IconComponent /> : null;
  };

  return (
    <div className="flex flex-col bg-white mt-4 rounded-xl border border-solid border-[#ECF0F5] shadow-sm hover:shadow-md transition-all duration-300">
      <div className="relative mb-12">
        <img src={bgDefault} className="w-full h-[72px] rounded-t-xl object-cover" />
        <img
          src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/J7JhcO5QIC/ap45vk8s_expires_30_days.png"}
          className="w-14 h-14 absolute bottom-[-28px] left-8 rounded-full object-cover shadow-lg"
        />
      </div>

      <div className="px-8 mb-6">
        <h3 className="text-[#0C1024] text-base font-semibold mb-1">Robert Fox</h3>
        <p className="text-[#6B7280] text-sm">Software Engineer</p>
      </div>

      <div className="flex flex-col px-4 pb-6">
        {menuLeftList.map((item) => (
          <button
            key={item.key}
            onClick={handleMenuClick(item.key)}
            className={cn(
              "flex items-center w-full px-4 py-3 gap-3 rounded-lg mb-1 transition-all duration-200 ease-in-out cursor-pointer",
              activeMenu === item.key ? "bg-blue-50 text-black" : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            )}
          >
            <div className={cn("w-5 h-5 transition-transform duration-200", activeMenu === item.key && "scale-110")}>
              {item.icon && renderIcon(item.icon)}
            </div>
            <span className={cn("text-sm font-medium", activeMenu === item.key && "font-semibold")}>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
