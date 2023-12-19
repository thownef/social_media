import friend from "../assets/images/friend.png";
import saved from "../assets/images/saved.png";
import group from "../assets/images/group.png";
import marketplace from "../assets/images/marketplace.png";
import event from "../assets/images/event.png";
import memories from "../assets/images/memories.png";
import ads from "../assets/images/ads.png";
import feed from "../assets/images/feed.png";
import blood from "../assets/images/blood.png";
import climate from "../assets/images/climate.png";
import crisis from "../assets/images/crisis.png";
import fundrai from "../assets/images/fundrai.png";
import gamevideo from "../assets/images/gamevideo.png";
import mess from "../assets/images/mess.png";
import messkid from "../assets/images/messkid.png";
import bussiness from "../assets/images/bussiness.png";
import payment from "../assets/images/payment.png";
import page from "../assets/images/page.png";
import playgame from "../assets/images/playgame.png";
import recent from "../assets/images/recent.png";
import adcenter from "../assets/images/adcenter.png";
import shortcuts_1 from "../assets/images/shortcuts_1.png";
import shortcuts_2 from "../assets/images/shortcuts_2.jpeg";
import shortcuts_3 from "../assets/images/shortcuts_3.webp";
import shortcuts_4 from "../assets/images/shortcuts_4.png";
import shortcuts_5 from "../assets/images/shortcuts_5.webp";
import { ROUTES } from "../utils/constants/ROUTES";

import profileT from "../assets/images/profileT.jpg";
import story from "../assets/images/story.jpg";

export interface Tool {
  id: number;
  image: string;
  name: string;
}

export interface IconMenus {
  id: number;
  icon: string;
  name: string;
  link?: string;
}

export interface Menu_Config {
  minWidth?: number;
  maxWidth?: number;
  icons: IconMenus[];
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export const menuCenter: Menu_Config[] = [
  {
    minWidth: 992,
    maxWidth: undefined,
    icons: [
      {
        id: 1,
        icon: "fa-solid fa-house",
        name: "Home",
        link: ROUTES.HOME,
      },
      {
        id: 2,
        icon: "fa-brands fa-youtube",
        name: "Video",
        link: ROUTES.VIDEO,
      },
      {
        id: 3,
        icon: "fa-solid fa-store",
        name: "Marketplace",
        link: ROUTES.MARKETPLACE,
      },
      {
        id: 4,
        icon: "fa-solid fa-users",
        name: "Groups",
        link: ROUTES.GROUP,
      },
      {
        id: 5,
        icon: "fa-solid fa-gamepad",
        name: "Gaming",
        link: ROUTES.GAMING,
      },
    ],
    xs: 0,
    sm: 0,
    md: 0,
    lg: 12,
    xl: 9,
  },
  {
    minWidth: 576,
    maxWidth: 991,
    icons: [
      {
        id: 1,
        icon: "fa-solid fa-house",
        name: "Home",
        link: ROUTES.HOME,
      },
      {
        id: 2,
        icon: "fa-brands fa-youtube",
        name: "Video",
        link: ROUTES.VIDEO,
      },
      {
        id: 3,
        icon: "fa-solid fa-store",
        name: "Marketplace",
        link: ROUTES.MARKETPLACE,
      },
      {
        id: 4,
        icon: "fa-solid fa-users",
        name: "Groups",
        link: ROUTES.GROUP,
      },
      {
        id: 5,
        icon: "fa-solid fa-bars",
        name: "Xem thêm",
        link: "",
      },
    ],
    xs: 0,
    sm: 10,
    md: 11,
    lg: 0,
    xl: 0,
  },
  {
    minWidth: undefined,
    maxWidth: 575,
    icons: [
      {
        id: 1,
        icon: "fa-solid fa-bars",
        name: "Xem thêm",
        link: "",
      },
    ],
    xs: 8,
    sm: 0,
    md: 0,
    lg: 0,
    xl: 0,
  },
];

export const menuRight: Menu_Config[] = [
  {
    minWidth: 992,
    maxWidth: undefined,
    icons: [
      {
        id: 1,
        icon: "fa-solid fa-grip-vertical",
        name: "Menu",
      },
      {
        id: 2,
        icon: "fa-brands fa-facebook-messenger",
        name: "Messenger",
      },
      {
        id: 3,
        icon: "fa-solid fa-bell",
        name: "Notificaiton",
      },
    ],
    xs: 0,
    sm: 0,
    md: 0,
    lg: 6,
    xl: 7,
  },
  {
    maxWidth: 991,
    icons: [
      {
        id: 1,
        icon: "fa-solid fa-plus",
        name: "Tạo",
      },
      {
        id: 2,
        icon: "fa-brands fa-facebook-messenger",
        name: "Messenger",
      },
      {
        id: 3,
        icon: "fa-solid fa-bell",
        name: "Notificaiton",
      },
    ],
    xs: 11,
    sm: 9,
    md: 7,
    lg: 0,
    xl: 0,
  },
];

export const tools: Tool[] = [
  {
    id: 1,
    image: friend,
    name: "Friends",
  },
  {
    id: 2,
    image: group,
    name: "Groups",
  },
  {
    id: 3,
    image: memories,
    name: "Memories",
  },
  {
    id: 4,
    image: saved,
    name: "Saved",
  },
  {
    id: 5,
    image: marketplace,
    name: "Marketplace",
  },
  {
    id: 6,
    image: feed,
    name: "Feeds",
  },
  {
    id: 7,
    image: event,
    name: "Events",
  },
  {
    id: 8,
    image: ads,
    name: "Ads Manager",
  },
  {
    id: 9,
    image: adcenter,
    name: "Ad Center",
  },
  {
    id: 10,
    image: blood,
    name: "Blood Donations",
  },
  {
    id: 11,
    image: climate,
    name: "Climate Science Center",
  },
  {
    id: 12,
    image: crisis,
    name: "Crisis reponse",
  },
  {
    id: 13,
    image: fundrai,
    name: "Fundraisers",
  },
  {
    id: 14,
    image: gamevideo,
    name: "Gaming Video",
  },
  {
    id: 15,
    image: mess,
    name: "Messenger",
  },
  {
    id: 16,
    image: messkid,
    name: "Messenger Kids",
  },
  {
    id: 17,
    image: bussiness,
    name: "Meta Business Suite",
  },
  {
    id: 18,
    image: payment,
    name: "Order and payments",
  },
  {
    id: 19,
    image: page,
    name: "Pages",
  },
  {
    id: 20,
    image: playgame,
    name: "Play Games",
  },
  {
    id: 20,
    image: recent,
    name: "Recent ad activity",
  },
];
export const shortcuts: Tool[] = [
  {
    id: 1,
    image: shortcuts_1,
    name: "MOBILE GAMES",
  },
  {
    id: 2,
    image: shortcuts_2,
    name: "Online Education",
  },
  {
    id: 3,
    image: shortcuts_3,
    name: "Food Lovers",
  },

  {
    id: 4,
    image: shortcuts_4,
    name: "Social Media Academy",
  },
  {
    id: 5,
    image: shortcuts_5,
    name: "PC Shop",
  },
];

export const sidebar_info: string[] = [
  "Privacy",
  "Terms",
  "Advertising",
  "Ad Choices",
  "Cookies",
];

export const storyData = [
  { id: 0, imageProfile: profileT, imageStory: story, name: "Nguyễn Văn 0" },
  { id: 1, imageProfile: profileT, imageStory: story, name: "Nguyễn Văn 1" },
  { id: 2, imageProfile: profileT, imageStory: story, name: "Nguyễn Văn 2" },
  { id: 3, imageProfile: profileT, imageStory: story, name: "Nguyễn Văn 3" },
  { id: 4, imageProfile: profileT, imageStory: story, name: "Nguyễn Văn 4" },
  { id: 5, imageProfile: profileT, imageStory: story, name: "Nguyễn Văn 5" },
  { id: 6, imageProfile: profileT, imageStory: story, name: "Nguyễn Văn 6" },
  { id: 7, imageProfile: profileT, imageStory: story, name: "Nguyễn Văn 7" },
  { id: 8, imageProfile: profileT, imageStory: story, name: "Nguyễn Văn 8" },
  { id: 9, imageProfile: profileT, imageStory: story, name: "Nguyễn Văn 9" },
  { id: 10, imageProfile: profileT, imageStory: story, name: "Nguyễn Văn 10" },
  { id: 11, imageProfile: profileT, imageStory: story, name: "Nguyễn Văn 11" },
  { id: 12, imageProfile: profileT, imageStory: story, name: "Nguyễn Văn 12" },
  { id: 13, imageProfile: profileT, imageStory: story, name: "Nguyễn Văn 13" },
  {
    id: 14,
    imageProfile: profileT,
    imageStory: story,
    name: "Nguyễn Văn 14",
  },
  { id: 15, imageProfile: profileT, imageStory: story, name: "Nguyễn Văn 15" },
  { id: 16, imageProfile: profileT, imageStory: story, name: "Nguyễn Văn 16" },
  {
    id: 17,
    imageProfile: profileT,
    imageStory: story,
    name: "Nguyễn Văn 17",
  },
];
