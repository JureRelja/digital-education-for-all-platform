import { jobSuggestionInfoEn } from "../../text/jobSuggestion/JobSuggestionInfo";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import { useState } from "react";
import { useSelector } from "react-redux";
import JobSuggestion from "../../components/JobSuggestion";
import JobSuggestionResults from "../../components/JobSuggestionResults";
import useText from "../../hooks/textLanguage";
import Heading from "../../components/Heading";
import PageContainer from "../../components/PageContainer";

function InitialTestPage() {
  const [testStarted, setTestStarted] = useState(false);

  const userRIASEC = useSelector((state: any) => state.user.RIASEC.completed);

  const jobSuggestionText = useText(
    jobSuggestionInfoEn,
    jobSuggestionInfoEn,
    jobSuggestionInfoEn,
    jobSuggestionInfoEn,
    jobSuggestionInfoEn
  );

  return (
    <>
      {userRIASEC ? (
        <JobSuggestionResults />
      ) : (
        <>
          {!testStarted ? (
            <PageContainer>
              <Heading>{jobSuggestionText.title}</Heading>
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
            </PageContainer>
          ) : (
            <>
              <JobSuggestion />
            </>
          )}
        </>
      )}
    </>
  );
}

export default InitialTestPage;
