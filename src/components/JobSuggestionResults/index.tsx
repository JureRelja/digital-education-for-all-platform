import { useSelector } from "react-redux";
import Button from "../../base-components/Button";
import Progress from "../../base-components/Progress";
import { RIASECTypeEng } from "../../text/jobSuggestion/RIASECType";
import { resultsTextEng } from "../../text/jobSuggestion/ResultsText";
import { useNavigate } from "react-router";
import useText from "../../hooks/textLanguage";
import Heading from "../../components/Heading";
import PageContainer from "../../components/PageContainer";

function index() {
  const navigate = useNavigate();

  const resultsText = useText(
    resultsTextEng,
    resultsTextEng,
    resultsTextEng,
    resultsTextEng,
    resultsTextEng
  );

  const RIASEC = useSelector((state: any) => state.user.RIASEC); //Getting RIASEC store from Redux

  //Calculating the width for each progress bar
  const firstLetterWidth = RIASEC.firstLetter.value + "%";
  const secondLetterWidth = RIASEC.secondLetter.value + "%";
  const thirdLetterWidth = RIASEC.thirdLetter.value + "%";
  const fourthLetterWidth = RIASEC.fourthLetter.value + "%";
  const fifthLetterWidth = RIASEC.fifthLetter.value + "%";
  const sixthLetterWidth = RIASEC.sixthLetter.value + "%";

  return (
    <PageContainer>
      <Heading>{resultsText.title}</Heading>
      <div className="text-xl">
        {resultsText.RIASECLetterResult} <b>{RIASEC.firstLetter.letter}</b> -{" "}
        <b>{RIASEC.secondLetter.letter}</b> - <b>{RIASEC.thirdLetter.letter}</b>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 w-full">
        <div className="flex flex-col justify-center items-center gap-1 w-full">
          <h1 className="text-md font-bold">
            {RIASECTypeEng(RIASEC.firstLetter.letter)}
          </h1>
          <Progress className="h-7 rounded-lg">
            {RIASEC.firstLetter.value == 0 ? (
              <p className="text-center mt-1">
                {RIASEC.firstLetter.value + "%"}
              </p>
            ) : (
              <Progress.Bar
                className={`bg-info`}
                style={{ width: firstLetterWidth }}
              >
                {RIASEC.firstLetter.value}%
              </Progress.Bar>
            )}
          </Progress>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 w-full">
          <h1 className="text-md font-bold">
            {RIASECTypeEng(RIASEC.secondLetter.letter)}
          </h1>
          <Progress className="h-7 rounded-lg ">
            {RIASEC.secondLetter.value == 0 ? (
              <p className="text-center mt-1">
                {RIASEC.secondLetter.value + "%"}
              </p>
            ) : (
              <Progress.Bar
                className={`bg-danger`}
                style={{ width: secondLetterWidth }}
              >
                {RIASEC.secondLetter.value}%
              </Progress.Bar>
            )}
          </Progress>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 w-full">
          <h1 className="text-md font-bold">
            {RIASECTypeEng(RIASEC.thirdLetter.letter)}
          </h1>
          <Progress className="h-7 rounded-lg">
            {RIASEC.thirdLetter.value == 0 ? (
              <p className="text-center mt-1">
                {RIASEC.thirdLetter.value + "%"}
              </p>
            ) : (
              <Progress.Bar
                className={`bg-warning h-7`}
                style={{ width: thirdLetterWidth }}
              >
                {RIASEC.thirdLetter.value}%
              </Progress.Bar>
            )}
          </Progress>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 w-full">
          <h1 className="text-md font-bold">
            {RIASECTypeEng(RIASEC.fourthLetter.letter)}
          </h1>
          <Progress className="h-7 rounded-lg">
            {RIASEC.fourthLetter.value == 0 ? (
              <p className="text-center mt-1">
                {RIASEC.fourthLetter.value + "%"}
              </p>
            ) : (
              <Progress.Bar
                className={` bg-success h-7`}
                style={{ width: fourthLetterWidth }}
              >
                {RIASEC.fourthLetter.value}%
              </Progress.Bar>
            )}
          </Progress>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 w-full">
          <h1 className="text-md font-bold">
            {RIASECTypeEng(RIASEC.fifthLetter.letter)}
          </h1>
          <Progress className="h-7 rounded-lg">
            {RIASEC.fifthLetter.value == 0 ? (
              <p className="text-center mt-1">
                {RIASEC.fifthLetter.value + "%"}
              </p>
            ) : (
              <Progress.Bar
                className={"bg-pending"}
                style={{ width: fifthLetterWidth }}
              >
                {RIASEC.fifthLetter.value}%
              </Progress.Bar>
            )}
          </Progress>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 w-full">
          <h1 className="text-md font-bold">
            {RIASECTypeEng(RIASEC.sixthLetter.letter)}
          </h1>
          <Progress className="h-7 rounded-lg ">
            {RIASEC.sixthLetter.value == 0 ? (
              <p className="text-center mt-1">
                {RIASEC.sixthLetter.value + "%"}
              </p>
            ) : (
              <Progress.Bar
                className={`bg-primary`}
                style={{ width: sixthLetterWidth }}
              >
                {RIASEC.sixthLetter.value}%
              </Progress.Bar>
            )}
          </Progress>
        </div>
      </div>
    </PageContainer>
  );
}

export default index;
