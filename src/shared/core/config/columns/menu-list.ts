import { PagePath } from "@/shared/core/enum";
import { Link } from "react-router-dom";

interface MenuItem {
  label: string;
  icon: any;
  value: string;
  component?: typeof Link;
  to?: PagePath;
}

export const MenuList: MenuItem[] = [
  {
    label: "Home",
    icon: "Home",
    value: "home",
    component: Link,
    to: PagePath.HOME,
  },
  {
    label: "Profile",
    icon: "AccountCircle",
    value: "profile",
  },
  {
    label: "Friends",
    icon: "Group",
    value: "friends",
  },
  {
    label: "Forum",
    icon: "Forum",
    value: "forum",
  },
];
