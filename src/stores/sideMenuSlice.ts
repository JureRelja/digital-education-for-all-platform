import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { icons } from "../base-components/Lucide";

export interface Menu {
  icon: keyof typeof icons;
  title: string;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface SideMenuState {
  menu: Array<Menu | "divider">;
}

const initialState: SideMenuState = {
  menu: [
    {
      icon: "Edit",
      title: "Initial test",
      pathname: "/dashboard/initial-test",
    },
    {
      icon: "FileText",
      title: "Courses",
      pathname: "/dashboard/courses",
    },
    {
      icon: "Archive",
      title: "Certificates",
      pathname: "/dashboard/certificates",
    },
    {
      icon: "Users",
      title: "Job Suggestions",
      pathname: "/dashboard/job-suggestions",
    }
    // {
    //   icon: "Home",
    //   title: "Dashboard",
    //   pathname: "/",
    // },
    // {
    //   icon: "Box",
    //   title: "Menu Layout",
     
    // },
    // {
    //   icon: "ShoppingBag",
    //   title: "E-Commerce",
     
    // },
    // {
    //   icon: "Inbox",
    //   pathname: "/inbox",
    //   title: "Inbox",
    // },
    // {
    //   icon: "HardDrive",
    //   pathname: "/file-manager",
    //   title: "File Manager",
    // },
    // {
    //   icon: "CreditCard",
    //   pathname: "/point-of-sale",
    //   title: "Point of Sale",
    // },
    // {
    //   icon: "MessageSquare",
    //   pathname: "/chat",
    //   title: "Chat",
    // },
    // {
    //   icon: "FileText",
    //   pathname: "/post",
    //   title: "Post",
    // },
    // {
    //   icon: "Calendar",
    //   pathname: "/calendar",
    //   title: "Calendar",
    // },
    // "divider",
    // {
    //   icon: "Edit",
    //   title: "Crud",
    
    // },
    // {
    //   icon: "Users",
    //   title: "Users",
      
    // },
    // {
    //   icon: "Trello",
    //   title: "Profile",
     
    // },
    // {
    //   icon: "Layout",
    //   title: "Pages",
     
    // }
  ],
};

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {},
});

export const selectSideMenu = (state: RootState) => state.sideMenu.menu;

export default sideMenuSlice.reducer;
