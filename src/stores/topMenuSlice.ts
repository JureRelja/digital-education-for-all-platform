import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { icons } from "../base-components/Lucide";


export interface Menu {
  icon: keyof typeof icons;
  titleEn: string;
  titleHr?: string;
  titleSl?: string;
  titlePl?: string;
  titleCz?: string;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}


export interface TopMenuState {
  menu: Array<Menu>;
}

const initialState: TopMenuState = {
  menu: [
    {
      icon: "Edit",
      titleEn: "Initial test",
      titleHr: "Početni test",
      titleSl: "Začetni test",
      titlePl: "Test początkowy",
      titleCz: "Počáteční test",
      pathname: "/dashboard/initial-test",
    },
    {
      icon: "FileText",
      titleEn: "Courses",
      titleHr: "Kursevi",
      titleSl: "Kursi",
      titlePl: "Kursy",
      titleCz: "Kurzy",
      pathname: "/dashboard/courses",
      subMenu: [
        {
          icon: "FileText",
          titleEn: "All Courses",
          
          pathname: "/dashboard/courses/1",
        },
        {
          icon: "FileText",
          titleEn: "My Courses",
          pathname: "/dashboard/courses/2",
        },
        {
          icon: "FileText",
          titleEn: "My Courses",
          pathname: "/dashboard/courses/3",
        },
        {
          icon: "FileText",
          titleEn: "My Courses",
          pathname: "/dashboard/courses/4",
        },
        {
          icon: "FileText",
          titleEn: "My Courses",
          pathname: "/dashboard/courses/5",
        },
        {
          icon: "FileText",
          titleEn: "My Courses",
          pathname: "/dashboard/courses/6",
        },
        {
          icon: "FileText",
          titleEn: "My Courses",
          pathname: "/dashboard/courses/7",
        },
        {
          icon: "FileText",
          titleEn: "My Courses",
          pathname: "/dashboard/courses/8",
        },
        {
          icon: "FileText",
          titleEn: "My Courses",
          pathname: "/dashboard/courses/9",
        },
        {
          icon: "FileText",
          titleEn: "My Courses",
          pathname: "/dashboard/courses/10",
        }
      ]  
    },
    {
      icon: "Archive",
      titleEn: "Certificates",
      titleHr: "Certifikati",
      titleSl: "Certifikati",
      titlePl: "Certyfikaty",
      titleCz: "Certifikáty",
      pathname: "/dashboard/certificates",
    },
    {
      icon: "Users",
      titleEn: "Job suggestions",
      titleHr: "Poslovi",
      titleSl: "Delovna mesta",
      titlePl: "Oferty pracy",
      titleCz: "Pracovní nabídky",
      pathname: "/dashboard/job-suggestions",
    }
        
  ],
};

export const topMenuSlice = createSlice({
  name: "topMenu",
  initialState,
  reducers: {},
});


export const selectTopMenu = (state: RootState) => state.topMenu.menu;

export default topMenuSlice.reducer;


