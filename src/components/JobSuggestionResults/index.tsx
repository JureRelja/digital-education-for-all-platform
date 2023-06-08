import { useSelector } from "react-redux";
import Button from "../../base-components/Button";
import Progress from "../../base-components/Progress";
import { RIASECTypeEn } from "../../text/jobSuggestion/RIASECType";
import { resultsTextEn } from "../../text/jobSuggestion/ResultsText";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import useText from "../../hooks/textLanguage";
import Heading from "../../components/Heading";
import PageContainer from "../../components/PageContainer";
import JobSuggProgBar from "../../components/JobSuggProgBar";

function index() {
  const resultsText = useText(
    resultsTextEn,
    resultsTextEn,
    resultsTextEn,
    resultsTextEn,
    resultsTextEn
  );

  const RIASECType = useText(
    RIASECTypeEn,
    RIASECTypeEn,
    RIASECTypeEn,
    RIASECTypeEn,
    RIASECTypeEn
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
        <JobSuggProgBar
          title={RIASECType(RIASEC.firstLetter.letter).title}
          value={RIASEC.firstLetter.value}
          width={firstLetterWidth}
          color={"bg-info"}
          characteristics={
            RIASECType(RIASEC.firstLetter.letter).characteristics
          }
          jobs={RIASECType(RIASEC.firstLetter.letter).jobs}
        />
        <JobSuggProgBar
          title={RIASECType(RIASEC.secondLetter.letter).title}
          value={RIASEC.secondLetter.value}
          width={secondLetterWidth}
          color={"bg-danger"}
          characteristics={
            RIASECType(RIASEC.secondLetter.letter).characteristics
          }
          jobs={RIASECType(RIASEC.secondLetter.letter).jobs}
        />
        <JobSuggProgBar
          title={RIASECType(RIASEC.thirdLetter.letter).title}
          value={RIASEC.thirdLetter.value}
          width={thirdLetterWidth}
          color={"bg-warning"}
          characteristics={
            RIASECType(RIASEC.thirdLetter.letter).characteristics
          }
          jobs={RIASECType(RIASEC.thirdLetter.letter).jobs}
        />
        <JobSuggProgBar
          title={RIASECType(RIASEC.fourthLetter.letter).title}
          value={RIASEC.fourthLetter.value}
          width={fourthLetterWidth}
          color={"bg-success"}
          characteristics={
            RIASECType(RIASEC.fourthLetter.letter).characteristics
          }
          jobs={RIASECType(RIASEC.fourthLetter.letter).jobs}
        />
        <JobSuggProgBar
          title={RIASECType(RIASEC.fifthLetter.letter).title}
          value={RIASEC.fifthLetter.value}
          width={fifthLetterWidth}
          color={"bg-pending"}
          characteristics={
            RIASECType(RIASEC.fifthLetter.letter).characteristics
          }
          jobs={RIASECType(RIASEC.fifthLetter.letter).jobs}
        />
        <JobSuggProgBar
          title={RIASECType(RIASEC.sixthLetter.letter).title}
          value={RIASEC.sixthLetter.value}
          width={sixthLetterWidth}
          color={"bg-primary"}
          characteristics={
            RIASECType(RIASEC.sixthLetter.letter).characteristics
          }
          jobs={RIASECType(RIASEC.sixthLetter.letter).jobs}
        />
      </div>
    </PageContainer>
  );
}

export default index;
