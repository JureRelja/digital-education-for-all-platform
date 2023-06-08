import { useState } from "react";
import Button from "../../base-components/Button";
import PageContainer from "../../components/PageContainer";
import Heading from "../../components/Heading";
import useText from "../../hooks/textLanguage";
import { courseTestTextEn } from "../../text/courseTest/text";
import { useParams } from "react-router-dom";
import { coursesEn, coursesHr } from "../../text/courses/Courses";
import CourseTestResults from "../../components/CourseTestResults";

function index() {
  const courseTestText = useText(
    //Getting the text on the right language
    courseTestTextEn,
    courseTestTextEn,
    courseTestTextEn,
    courseTestTextEn,
    courseTestTextEn
  );

  const { courseID } = useParams(); //Getting the Course ID

  const courseLanguage = useText(
    //Getting the course on the right language
    coursesEn,
    coursesHr,
    coursesEn,
    coursesEn,
    coursesEn
  );

  const course = courseLanguage.find((course: any) => course.id == courseID); //Finding the course with the right ID

  const questions = course.content.testQustions; //Getting the questions from the course

  const [questionIndex, setQuestionIndex] = useState(0); //Setting the question index
  const [activeAnswer, setActiveAnswer] = useState(""); //Setting the active answer
  const [points, setPoints] = useState(0); //Setting the points
  const [showResults, setShowResults] = useState(false); //Setting the show results

  const handleAnswerClick = (answer: string) => {
    setActiveAnswer(answer);

    const correctAnswer = questions[questionIndex].correctAnswer;

    if (answer == correctAnswer) {
      setPoints((prev) => prev + 1);
    }
  };

  const submitInitialTest = () => {
    setShowResults(true);
  };

  const nextQuestion = () => {
    setQuestionIndex(questionIndex + 1);
    setActiveAnswer("");
  };

  return (
    <PageContainer>
      <Heading>
        {course.title} {courseTestText.title}
      </Heading>
      {!showResults ? (
        <div className="flex flex-col gap-3 items-center bg-white rounded-lg shadow-sm mt-4 w-full opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards">
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
                {courseTestText.endButtonText}
              </Button>
            ) : (
              <Button
                variant="primary"
                className="mb-2 text-md w-fit"
                onClick={nextQuestion}
                disabled={activeAnswer == ""}
              >
                {courseTestText.nextButtonText}
              </Button>
            )}
          </div>
        </div>
      ) : (
        <CourseTestResults points={points} courseID={courseID} />
      )}
    </PageContainer>
  );
}

export default index;
