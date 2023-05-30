import { useState } from "react";
import { initialTestQuestionsEng } from "../../text/jobSuggestion/InitialTestQuestions";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../base-components/Button";
import { database } from "../../firebase";
import { ref, update } from "firebase/database";
import { changeRIASEC } from "../../stores/userSlice";
import FormSwitch from "../../base-components/Form/FormSwitch";
import useText from "../../hooks/textLanguage";
import { useNavigate } from "react-router-dom";

function index() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const jobSuggestionText = useText(
    //Page text
    initialTestQuestionsEng,
    initialTestQuestionsEng,
    initialTestQuestionsEng,
    initialTestQuestionsEng,
    initialTestQuestionsEng
  );

  const userCode = useSelector((state: any) => state.user.userCode);

  //RIASEC values
  const [R, setR] = useState(0);
  const [I, setI] = useState(0);
  const [A, setA] = useState(0);
  const [S, setS] = useState(0);
  const [E, setE] = useState(0);
  const [C, setC] = useState(0);

  //Pagination
  const postsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastQuestion = currentPage * postsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - postsPerPage;
  const currentQuestions = jobSuggestionText.questions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  ); //New array with 6 questions

  const updateIndexHandler = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const switchHandler = (value: any, letter: any) => {
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
    if (value == false) {
      switch (letter) {
        case "R":
          setR((prev) => prev - 1);
          break;
        case "I":
          setI((prev) => prev - 1);
          break;
        case "A":
          setA((prev) => prev - 1);
          break;
        case "S":
          setS((prev) => prev - 1);
          break;
        case "E":
          setE((prev) => prev - 1);
          break;
        case "C":
          setC((prev) => prev - 1);
          break;
        default:
          break;
      }
    }
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
    const fourthLetter = sortedRIASECArray[2];
    const fifthLetter = sortedRIASECArray[1];
    const sixthLetter = sortedRIASECArray[0];

    const firstLetterPercent = Math.round((firstLetter.value / 7) * 100);
    const secondLetterPercent = Math.round((secondLetter.value / 7) * 100);
    const thirdLetterPercent = Math.round((thirdLetter.value / 7) * 100);
    const fourthLetterPercent = Math.round((fourthLetter.value / 7) * 100);
    const fifthLetterPercent = Math.round((fifthLetter.value / 7) * 100);
    const sixthLetterPercent = Math.round((sixthLetter.value / 7) * 100);

    let RIASEC = {
      firstLetter: { value: firstLetterPercent, letter: firstLetter.letter },
      secondLetter: {
        value: secondLetterPercent,
        letter: secondLetter.letter,
      },
      thirdLetter: { value: thirdLetterPercent, letter: thirdLetter.letter },
      fourthLetter: {
        value: fourthLetterPercent,
        letter: fourthLetter.letter,
      },
      fifthLetter: { value: fifthLetterPercent, letter: fifthLetter.letter },
      sixthLetter: { value: sixthLetterPercent, letter: sixthLetter.letter },
      code: `${firstLetter.letter}${secondLetter.letter}${thirdLetter.letter}`,
      completed: true,
    };

    //Store RIASEC values in store
    dispatch(changeRIASEC(RIASEC));

    //Store RIASEC values in database
    update(ref(database, `users/${userCode}`), { RIASEC }).then(() => {
      navigate("/dashboard/job-suggestions");
    });
  };

  return (
    <div className="flex flex-col gap-6 items-center opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards">
      <h1 className="text-3xl mt-5 text-bold">Initial test</h1>
      <div className="flex flex-col justify-center items-center gap-5 opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards">
        {currentQuestions.map((question: any) => (
          <div
            key={question.question}
            className="flex justify-between w-full items-center opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards"
          >
            <h3 className="text-lg mr-5">{question.question}</h3>
            <div>
              <FormSwitch className="flex gap-3">
                <FormSwitch.Label
                  htmlFor={`checkbox-${question.question}`}
                  className="font-bold"
                >
                  {jobSuggestionText.no}
                </FormSwitch.Label>
                <FormSwitch.Input
                  id={`checkbox-${question.question}`}
                  type="checkbox"
                  className="ml-1"
                  onChange={(event) =>
                    switchHandler(event.target.checked, question.letter)
                  }
                />
                <FormSwitch.Label
                  htmlFor={`checkbox-${question.question}`}
                  className="font-bold"
                >
                  {jobSuggestionText.yes}
                </FormSwitch.Label>
              </FormSwitch>
            </div>
          </div>
        ))}
        {currentPage <
        Math.ceil(jobSuggestionText.questions.length / postsPerPage) ? (
          <Button
            variant="primary"
            className="mb-2 mr-2 text-md w-24"
            onClick={updateIndexHandler}
          >
            {jobSuggestionText.next}
          </Button>
        ) : (
          <Button
            variant="success"
            className="mb-2 mr-2 text-md text-white"
            onClick={submitHollandTestHandler}
          >
            {jobSuggestionText.submit}
          </Button>
        )}
      </div>
    </div>
  );
}

export default index;
