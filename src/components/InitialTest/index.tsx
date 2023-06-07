import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../../base-components/Button";
import { initialTestPageTextEn } from "../../text/initialTestPage/Text";
import { useDispatch, useSelector } from "react-redux";
import { changeCoursesOrder } from "../../stores/userSlice";
import { database } from "../../firebase";
import { ref, update } from "firebase/database";
import PageContainer from "../PageContainer";
import Heading from "../../components/Heading";
import useText from "../../hooks/textLanguage";

function index() {
  const navigate = useNavigate(); //Navigation hook
  const dispatch = useDispatch(); //Dispatch hook

  const userCode = useSelector((state: any) => state.user.userCode); //User code

  const initialTestPageText = useText(
    initialTestPageTextEn,
    initialTestPageTextEn,
    initialTestPageTextEn,
    initialTestPageTextEn,
    initialTestPageTextEn
  );

  const questions = initialTestPageText.questions; //Initial test questions

  const [questionIndex, setQuestionIndex] = useState(0); //Index of the current question
  const [activeAnswer, setActiveAnswer] = useState(""); //Active answer

  const [course1Score, setCourse1Score] = useState(0); //Score for course 1
  const [course2Score, setCourse2Score] = useState(0); //Score for course 2
  const [course3Score, setCourse3Score] = useState(0); //Score for course 3
  const [course4Score, setCourse4Score] = useState(0); //Score for course 4
  const [course5Score, setCourse5Score] = useState(0); //Score for course 5
  const [course6Score, setCourse6Score] = useState(0); //Score for course 6
  const [course7Score, setCourse7Score] = useState(0); //Score for course 7
  const [course8Score, setCourse8Score] = useState(0); //Score for course 8
  const [course9Score, setCourse9Score] = useState(0); //Score for course 9
  const [course10Score, setCourse10Score] = useState(0); //Score for course 10

  const handleAnswerClick = (answer: any) => {
    const correctAnswer = questions[questionIndex].correctAnswer;

    setActiveAnswer(answer);

    if (correctAnswer == answer) {
      switch (questions[questionIndex].forCourse) {
        case 1:
          setCourse1Score((score: any) => score + 1);
          break;
        case 2:
          setCourse2Score((score: any) => score + 1);
          break;
        case 3:
          setCourse3Score((score: any) => score + 1);
          break;
        case 4:
          setCourse4Score((score: any) => score + 1);
          break;
        case 5:
          setCourse5Score((score: any) => score + 1);
          break;
        case 6:
          setCourse6Score((score: any) => score + 1);
          break;
        case 7:
          setCourse7Score((score: any) => score + 1);
          break;
        case 8:
          setCourse8Score((score: any) => score + 1);
          break;
        case 9:
          setCourse9Score((score: any) => score + 1);
          break;
        case 10:
          setCourse10Score((score: any) => score + 1);
          break;
      }
    }
  };

  const nextQuestion = () => {
    setQuestionIndex((index: any) => index + 1);
    setActiveAnswer("");
  };

  const submitInitialTest = () => {
    const courseScores = [
      { id: 1, score: course1Score, completed: false },
      { id: 2, score: course2Score, completed: false },
      { id: 3, score: course3Score, completed: false },
      { id: 4, score: course4Score, completed: false },
      { id: 5, score: course5Score, completed: false },
      { id: 6, score: course6Score, completed: false },
      { id: 7, score: course7Score, completed: false },
      { id: 8, score: course8Score, completed: false },
      { id: 9, score: course9Score, completed: false },
      { id: 10, score: course10Score, completed: false },
    ];

    const sortedCourseScores = courseScores.sort((a, b) => {
      return b.score - a.score;
    });

    const coursesOrder = sortedCourseScores.map((course) => course.id);

    dispatch(changeCoursesOrder(coursesOrder));

    update(ref(database, "users/" + userCode), {
      coursesOrder: coursesOrder,
      initialTestCompleted: true,
    }).then(() => {
      navigate("/dashboard/courses");
    });
  };

  return (
    <PageContainer>
      <Heading>{initialTestPageText.title}</Heading>
      <div className="flex flex-col gap-3 items-center bg-white rounded-lg shadow-sm mt-4 w-full">
        <div className="flex items-center justify-center w-full text-center">
          <h2 className="text-xl text-bold border-b w-full border-slate-200/60 px-7 py-4 opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards">
            {questions[questionIndex].title}
          </h2>
        </div>
        <div className="flex flex-col gap-5 text-center w-full px-7 py-4 opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards">
          {questions[questionIndex].answers.map((answer: string) =>
            answer == activeAnswer ? (
              <div
                key={answer}
                className={`w-full rounded-md py-1 transition-all duration-100 cursor-pointer bg-primary text-white opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards `}
              >
                <p className="text-md font-bold text-center">{answer}</p>
              </div>
            ) : (
              <div
                key={answer}
                className="w-full bg-secondary rounded-md py-1 hover:opacity-70 transition-all duration-100 cursor-pointer opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards "
                onClick={() => handleAnswerClick(answer)}
              >
                <p className="text-md font-bold text-center">{answer}</p>
              </div>
            )
          )}
        </div>
        <div className="flex flex-col justify-center items-left px-7 py-4 w-full opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards ">
          {questionIndex == questions.length - 1 ? (
            <Button
              variant="success"
              className="mb-2 text-md text-white w-fit"
              onClick={submitInitialTest}
              disabled={activeAnswer == ""}
            >
              {initialTestPageText.endButtonText}
            </Button>
          ) : (
            <Button
              variant="primary"
              className="mb-2 text-md w-fit"
              onClick={nextQuestion}
              disabled={activeAnswer == ""}
            >
              {initialTestPageText.nextButtonText}
            </Button>
          )}
        </div>
      </div>
    </PageContainer>
  );
}

export default index;
