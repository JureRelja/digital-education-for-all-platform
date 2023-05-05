import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import { hollandQuestionsEnglish } from "../../store/holland-test-question";
import classes from "./HollandTest.module.css";
import { motion } from "framer-motion";
import { UserContext } from "../../store/UserProvider";
import { database } from "../../firebase";
import { ref, update } from "firebase/database";
import { useNavigate } from "react-router-dom";

function HollandTest() {
  const ctx = useContext(UserContext);

  //RIASEC values
  const [R, setR] = useState(0);
  const [I, setI] = useState(0);
  const [A, setA] = useState(0);
  const [S, setS] = useState(0);
  const [E, setE] = useState(0);
  const [C, setC] = useState(0);

  //Pagination
  const postsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastQuestion = currentPage * postsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - postsPerPage;
  const currentQuestions = hollandQuestionsEnglish.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  ); //New array with 6 questions

  const updateIndexHandler = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const submitHollandTestHandler = () => {
    const RIASECArray = [
      { letter: "R", value: R },
      { letter: "I", value: I },
      { letter: "A", value: A },
      { letter: "S", value: S },
      { letter: "E", value: E },
      { letter: "C", value: C },
    ];

    const sortedRIASECArray = RIASECArray.sort((a, b) => {
      return a.value - b.value;
    });

    const firstLetter = sortedRIASECArray[5];
    const secondLetter = sortedRIASECArray[4];
    const thirdLetter = sortedRIASECArray[3];

    const total = firstLetter.value + secondLetter.value + thirdLetter.value;

    const firstLetterPercent = Math.round((firstLetter.value / total) * 100);
    const secondLetterPercent = Math.round((secondLetter.value / total) * 100);
    const thirdLetterPercent = Math.round((thirdLetter.value / total) * 100);

    //Store RIASEC values in context
    ctx.changeRIASEC({
      firstLetter: { value: firstLetterPercent, letter: firstLetter.letter },
      secondLetter: { value: secondLetterPercent, letter: secondLetter.letter },
      thirdLetter: { value: thirdLetterPercent, letter: thirdLetter.letter },
      code: `${firstLetter.letter}${secondLetter.letter}${thirdLetter.letter}`,
    });
    //Store RIASEC values in database
    update(ref(database, `users/${ctx.OIB}`), {
      RIASEC: {
        firstLetter: { value: firstLetterPercent, letter: firstLetter.letter },
        secondLetter: {
          value: secondLetterPercent,
          letter: secondLetter.letter,
        },
        thirdLetter: { value: thirdLetterPercent, letter: thirdLetter.letter },
        code: `${firstLetter.letter}${secondLetter.letter}${thirdLetter.letter}`,
      },
    }).then(() => {});
  };

  const switchHandler = (value, letter) => {
    if (value == true) {
      switch (letter) {
        case "R":
          setR((prev) => prev + 1);
          break;
        case "I":
          setI((prev) => prev + 1);
          break;
        case "A":
          setA((prev) => prev + 1);
          break;
        case "S":
          setS((prev) => prev + 1);
          break;
        case "E":
          setE((prev) => prev + 1);
          break;
        case "C":
          setC((prev) => prev + 1);
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className={classes["holland-test"]}>
      {currentQuestions.map((question) => (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className={classes["holland-question"]}
          key={question.question}
        >
          <h3>{question.question}</h3>
          <div className={classes["holland-question-yes-no"]}>
            <p>NO</p>
            <Switch
              inputProps={{ "aria-label": question.question }}
              onChange={(event) =>
                switchHandler(event.target.checked, question.letter)
              }
            />

            <p>YES</p>
          </div>
        </motion.div>
      ))}
      {currentPage <
      Math.ceil(hollandQuestionsEnglish.length / postsPerPage) ? (
        <Button variant="contained" color="info" onClick={updateIndexHandler}>
          Next
        </Button>
      ) : (
        <Button
          variant="contained"
          color="info"
          onClick={submitHollandTestHandler}
        >
          Submit Holland test
        </Button>
      )}
    </div>
  );
}

export default HollandTest;
