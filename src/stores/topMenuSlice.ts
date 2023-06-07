import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { icons } from "../base-components/Lucide";


export interface Menu {
  icon: keyof typeof icons;
  title: string;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
  helpText?: string;
}

export interface TopMenuState {
  menu: Array<Menu>;
}

const initialState: TopMenuState = {
  menu: [
    {
      icon: "Edit",
      title: "Initial test",
      pathname: "/dashboard/initial-test",
      helpText: "This is a help text",
    },
    {
      icon: "FileText",
      title: "Courses",
      pathname: "/dashboard/courses",
      subMenu: [
        {
          icon: "FileText",
          title: "All Courses",
          pathname: "/dashboard/courses/1",
        },
        {
          icon: "FileText",
          title: "My Courses",
          pathname: "/dashboard/courses/2",
        },
        {
          icon: "FileText",
          title: "My Courses",
          pathname: "/dashboard/courses/3",
        },
        {
          icon: "FileText",
          title: "My Courses",
          pathname: "/dashboard/courses/4",
        },
        {
          icon: "FileText",
          title: "My Courses",
          pathname: "/dashboard/courses/5",
        },
        {
          icon: "FileText",
          title: "My Courses",
          pathname: "/dashboard/courses/6",
        },
        {
          icon: "FileText",
          title: "My Courses",
          pathname: "/dashboard/courses/7",
        },
        {
          icon: "FileText",
          title: "My Courses",
          pathname: "/dashboard/courses/8",
        },
        {
          icon: "FileText",
          title: "My Courses",
          pathname: "/dashboard/courses/9",
        },
        {
          icon: "FileText",
          title: "My Courses",
          pathname: "/dashboard/courses/10",
        }
      ]  
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
    //   icon: "Layout",
    //   title: "Pages",
    // },
    // {
    //   icon: "Inbox",
    //   title: "Components",

    // },
    // {
    //   icon: "Sidebar",
    //   title: "Forms",
    // },
    // {
    //   icon: "HardDrive",
    //   title: "Widgets",
    // },
  ],
};

export const topMenuSlice = createSlice({
  name: "topMenu",
  initialState,
  reducers: {},
});


export const selectTopMenu = (state: RootState) => state.topMenu.menu;

export default topMenuSlice.reducer;


