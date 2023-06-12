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

export interface SideMenuState {
  menu: Array<Menu | "divider">;
}

const initialState: SideMenuState = {
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

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {},
});

export const selectSideMenu = (state: RootState) => state.sideMenu.menu;

export default sideMenuSlice.reducer;
