import { initialTestInfoTxtEng } from "../../text/jobSuggestion/InitialTestInfo";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import { useState } from "react";
import { useSelector } from "react-redux";
import JobSuggestionTest from "../../components/JobSuggestionTest";
import JobSuggestionResults from "../../components/JobSuggestionResults";
import useText from "../../hooks/textLanguage";

function InitialTestPage() {
  const [testStarted, setTestStarted] = useState(false);

  const userRIASEC = useSelector((state: any) => state.user.RIASEC.completed);

  const jobSuggestionText = useText(
    initialTestInfoTxtEng,
    initialTestInfoTxtEng,
    initialTestInfoTxtEng,
    initialTestInfoTxtEng,
    initialTestInfoTxtEng
  );

  return (
    <>
      {userRIASEC ? (
        <JobSuggestionResults />
      ) : (
        <>
          {!testStarted ? (
            <div className="flex flex-col gap-6 items-center opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards">
              <h1 className="text-3xl mt-5 text-bold">
                {jobSuggestionText.title}
              </h1>
              <div className="flex flex-col gap-5 text-center">
                <p className="text-md font-normal text-center">
                  {jobSuggestionText.parahraph1}
                </p>
                <p className="text-md font-normal text-center">
                  {jobSuggestionText.parahraph2}
                </p>
                <p className="text-md font-normal text-center">
                  {jobSuggestionText.paragraph3}
                </p>
                <p className="text-md font-normal text-center">
                  {jobSuggestionText.paragraph4}
                </p>
              </div>
              <div className="flex justify-center">
                <Button
                  variant="primary"
                  className="mb-2 mr-2 text-md"
                  onClick={() => setTestStarted(true)}
                >
                  {jobSuggestionText.startText}{" "}
                  <Lucide icon="Edit" className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ) : (
            <>
              <JobSuggestionTest />
            </>
          )}
        </>
      )}
    </>
  );
}

export default InitialTestPage;
