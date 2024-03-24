import type { LinkItem, Employee, CardData } from "../types/types";

import searchIcon from "../assets/searchIcon.svg";
import dataTableIcon from "../assets/dataTableIcon.svg";
import productIcon from "../assets/productIcon.svg";
import analyticsIcon from "../assets/analyticsIcon.svg";
import calenderIcon from "../assets/calenderIcon.svg";
import messangerIcon from "../assets/messangerIcon.svg";
import cryptoIcon from "../assets/cryptoIcon.svg";
import supportIcon from "../assets/supportIcon.svg";
import signOutIcon from "../assets/signOutIcon.svg";
import userImg1 from "../assets/userImg1.svg";
import userImg2 from "../assets/userImg2.svg";
import userImg3 from "../assets/userImg3.svg";
import userImg4 from "../assets/userImg4.svg";
import userImg5 from "../assets/userImg5.svg";
import userImg6 from "../assets/userImg6.svg";
import userImg7 from "../assets/userImg7.svg";
import userImg8 from "../assets/userImg8.svg";
import userImg9 from "../assets/userImg9.svg";
import userImg10 from "../assets/userImg10.svg";

export const linksData: LinkItem[] = [
  { icon: searchIcon, name: "Search", notificationCount: 0 },
  { icon: dataTableIcon, name: "Data Table", notificationCount: 0 },
  { icon: productIcon, name: "Product", notificationCount: 0 },
  { icon: analyticsIcon, name: "Analytics", notificationCount: 0 },
  { icon: calenderIcon, name: "Calender", notificationCount: 15 },
  { icon: messangerIcon, name: "Messanger", notificationCount: 0 },
  { icon: cryptoIcon, name: "Crypto", notificationCount: 0 },
  { icon: supportIcon, name: "Support", notificationCount: 0 },
  { icon: signOutIcon, name: "Sign Out", notificationCount: 0 },
];

export const initialState: Employee[] = [
  {
    id: 1,
    name: "Darlene Robertson",
    profileImage: userImg1,
    email: "trungkienspktnd@gamail.com",
    status: "Free",
    role: "Reporter",
  },
  {
    id: 2,
    name: "Devon Lane",
    profileImage: userImg2,
    email: "tranthuy.nute@gmail.com",
    status: "Busy",
    role: "Bot Analyst",
  },
  {
    id: 3,
    name: "Cody Fisher",
    profileImage: userImg3,
    email: "tienlapspktnd@gmail.com",
    status: "Working",
    role: "Sales Manager",
  },
  {
    id: 4,
    name: "Theresa Webb",
    profileImage: userImg4,
    email: "thuhang.nute@gmail.com",
    status: "Free",
    role: "Broadcaster",
  },
  {
    id: 5,
    name: "Savannah Nguyen",
    profileImage: userImg5,
    email: "manhhachkt08@gmail.com",
    status: "Working",
    role: "Marketer",
  },
  {
    id: 6,
    name: "Eleanor Pena",
    profileImage: userImg6,
    email: "vuhaithuongnute@gmail.com",
    status: "On Vacation",
    role: "Analytics Admin",
  },
  {
    id: 7,
    name: "Jenny Wilson",
    profileImage: userImg7,
    email: "danghoang87hl@gmail.com",
    status: "Busy",
    role: "Bot Editor",
  },
  {
    id: 8,
    name: "Marvin McKinney",
    profileImage: userImg8,
    email: "binhan628@gmail.com",
    status: "Free",
    role: "Team Editor",
  },
  {
    id: 9,
    name: "Cameron Williamson",
    profileImage: userImg9,
    email: "ckctm12@gmail.com",
    status: "Working",
    role: "PPC Expert",
  },
  {
    id: 10,
    name: "Jerome Bell",
    profileImage: userImg10,
    email: "nvt.isst.nute@gmail.com",
    status: "Busy",
    role: "Team Owner",
  },
];

export const profileImages: string[] = [
  userImg1,
  userImg2,
  userImg3,
  userImg4,
  userImg5,
  userImg6,
  userImg7,
  userImg8,
  userImg9,
  userImg10,
];

export const cardsData: CardData[] = [
  { name: "Total Budget", triangle: "down" },
  { name: "Monthly Budget", triangle: "down" },
  { name: "Weekly Budget", triangle: "up" },
  { name: "Todays Budget", triangle: "up" },
];
