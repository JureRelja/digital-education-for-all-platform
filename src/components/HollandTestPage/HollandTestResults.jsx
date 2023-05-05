import React, { useContext } from "react";
import classes from "./HollandTestResults.module.css";
import { UserContext } from "../../store/UserProvider";
import ProgressBar from "../UI/ProgressBar";
import { RIASECTypeEng } from "../../store/RIASECType";

function HollandTestResults() {
  const ctx = useContext(UserContext);

  const firstLetterText = RIASECTypeEng(ctx.RIASEC.firstLetter.letter);
  const secondLetterText = RIASECTypeEng(ctx.RIASEC.secondLetter.letter);
  const thirdLetterText = RIASECTypeEng(ctx.RIASEC.thirdLetter.letter);

  return (
    <div className={classes["holland-test-results"]}>
      <h1>Holland test results</h1>
      <div className={classes["results-container"]}>
        <div className={classes["results"]}>
          <h2>{firstLetterText}:</h2>
          <ProgressBar color="blue" value={ctx.RIASEC.firstLetter.value} />
        </div>
        <div className={classes["results"]}>
          <h2>{secondLetterText}:</h2>
          <ProgressBar color="orange" value={ctx.RIASEC.secondLetter.value} />
        </div>
        <div className={classes["results"]}>
          <h2>{thirdLetterText}:</h2>
          <ProgressBar color="purple" value={ctx.RIASEC.thirdLetter.value} />
        </div>
      </div>
    </div>
  );
}

export default HollandTestResults;
