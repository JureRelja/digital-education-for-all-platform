import React, { useContext } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import LanguageContext from "../../../store/language-context";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import classes from "./SelectLanguage.module.css";
import { FormControl } from "@mui/material";

const menuItemStyle = {
  display: "flex",
  columnGap: "20px",
  justifyContent: "left",
  alignItems: "center",
};

function SelectLanguage() {
  const ctx = useContext(LanguageContext);

  const handleChange = (event) => {
    ctx.changeLanguage(event.target.value);
  };

  return (
    <div className={classes["container"]}>
      <h2>Select the language you want to continue with</h2>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={ctx.language}
          label="Select Language"
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value={"hr"} sx={menuItemStyle}>
            <span className="fi fi-hr"></span>
            <p>Hrvatski</p>
          </MenuItem>
          <MenuItem value={"en"} sx={menuItemStyle}>
            <span className="fi fi-gb"></span>
            <p>English</p>
          </MenuItem>
          <MenuItem value={"si"} sx={menuItemStyle}>
            <span className="fi fi-si"></span>
            <p>Slovenščina</p>
          </MenuItem>
          <MenuItem value={"pl"} sx={menuItemStyle}>
            <span className="fi fi-pl"></span>
            <p>Polski</p>
          </MenuItem>
          <MenuItem value={"cz"} sx={menuItemStyle}>
            <span className="fi fi-cz"></span>
            <p>Čeština</p>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectLanguage;
