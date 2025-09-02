import { PagePath } from "@/shared/core/enum";
import { Columns } from "@/shared/core/types";

export const menuLeftList: Columns[] = [
  {
    key: "home",
    label: "Home",
    icon: "HomeIcon",
    href: PagePath.HOME,
    isActive: true,
  },
  {
    key: "profile",
    label: "Profile",
    icon: "UserIcon",
  },
  {
    key: "messages",
    label: "Messages",
    icon: "ChatBubbleLeftRightIcon",
    href: PagePath.MESSAGES,
  },
  {
    key: "notifications",
    label: "Notifications",
    icon: "BellIcon", // Thay bằng tên Heroicon
    href: PagePath.HOME,
  },
];
