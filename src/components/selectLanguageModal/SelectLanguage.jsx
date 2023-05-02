import React, { useContext } from "react";
import { Select, MenuItem } from "@mui/material";
import LanguageContext from "../../store/language-context";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import classes from "./SelectLanguage.module.css";

function SelectLanguage() {
  const ctx = useContext(LanguageContext);

  const handleChange = (event) => {
    ctx.changeLanguage(event.target.value);
    ctx.changedHandler();
  };

  return (
    <div className={classes["container"]}>
      <h2>Select the language you want to continue with</h2>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={ctx.language}
        label="Age"
        onChange={handleChange}
        className={classes["select"]}
      >
        <MenuItem value="en" className={classes["select-item"]}>
          <span class="fi fi-gb"></span>
          <p>English</p>
        </MenuItem>
        <MenuItem value="hr" className={classes["select-item"]}>
          <span class="fi fi-hr fis"></span>
          <p>Croatia</p>
        </MenuItem>
        <MenuItem value="pl" className={classes["select-item"]}>
          <span class="fi fi-pl fis"></span>
          <p>Poland</p>
        </MenuItem>
      </Select>
    </div>
  );
}

export default SelectLanguage;
