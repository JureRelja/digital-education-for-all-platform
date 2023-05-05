import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import classes from "./ProgressBar.module.css";

function ProgressBar(props) {
  const width = props.value == 0 ? "" : props.value + "%";

  return (
    <div
      className={classes["progress-bar-outter"] + " " + classes[props.color]}
    >
      <div
        className={
          classes["progress-bar-inner"] + " " + classes[props.color + "-inner"]
        }
        style={{ width: width }}
      >
        {props.value}%
      </div>
    </div>
  );
}

export default ProgressBar;
