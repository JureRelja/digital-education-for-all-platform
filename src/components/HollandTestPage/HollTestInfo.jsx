import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import classes from "./HollTestInfo.module.css";
import { hollandTestInfoTxtEng } from "../../store/holland-test-info";

function HollTestInfoPage() {
  return (
    <div className={classes["holland-page"]}>
      <h1>Holland Test</h1>
      <div>
        <p>{hollandTestInfoTxtEng.parahraph1}</p>
        <p>{hollandTestInfoTxtEng.parahraph2}</p>
        <p>{hollandTestInfoTxtEng.paragraph3}</p>
        <p>{hollandTestInfoTxtEng.paragraph4}</p>
      </div>
      <div className={classes["take-test-btn"]}>
        <Link to="/take-holland-test">
          <Button variant="contained" color="success" endIcon={<SendIcon />}>
            Take the Holland Test
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HollTestInfoPage;
