import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import sideMenuReducer from "./sideMenuSlice";
import topMenuReducer from "./topMenuSlice";
import userReducer from "./userSlice";
import languageReducer from "./languageSlice";

export const store = configureStore({
  reducer: {
    sideMenu: sideMenuReducer,
    topMenu: topMenuReducer,
    user: userReducer,
    language: languageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
