import React from "react";
import { Outlet } from "react-router-dom";
import classes from "./RootComponent.module.css";

function RootComponent() {
  return (
    <div className={classes["root-component"]}>
      <div className={classes.logo}>
        <img src="../src/images/digital-education-for-all-logo.png" />
      </div>
      <div className={classes.outlet}>
        <Outlet />
      </div>
    </div>
  );
}

export default RootComponent;
