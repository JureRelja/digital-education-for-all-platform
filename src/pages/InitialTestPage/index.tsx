import { initialTestPageTextEn } from "../../text/initialTestPage/Text";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import InitialTest from "../../components/InitialTest";
import { useNavigate } from "react-router";
import useText from "../../hooks/textLanguage";
import Heading from "../../components/Heading";
import PageContainer from "../../components/PageContainer";

function InitialTestPage() {
  const navigate = useNavigate();

  const initialTestPageText = useText(
    initialTestPageTextEn,
    initialTestPageTextEn,
    initialTestPageTextEn,
    initialTestPageTextEn,
    initialTestPageTextEn
  );

  const [testStarted, setTestStarted] = useState(false);

  const initialTestCompleted = useSelector(
    (state: any) => state.user.initialTestCompleted
  );

  return (
    <>
      {initialTestCompleted ? (
        <PageContainer>
          <Heading>{initialTestPageText.title}</Heading>
          <div className="flex flex-col gap-5 text-center">
            <p className="text-md font-normal text-center">
              {initialTestPageText.completedParagraph}
            </p>
          </div>
          <div className="flex justify-center">
            <Button
              variant="primary"
              className="mb-2 mr-2 text-md"
              onClick={() => navigate("/dashboard/courses")}
            >
              {initialTestPageText.seeCoursesButtonText}{" "}
              <Lucide icon="FileText" className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </PageContainer>
      ) : !testStarted ? (
        <PageContainer>
          <Heading>{initialTestPageText.title}</Heading>
          <div className="flex flex-col gap-5 text-center">
            <p className="text-md font-normal text-center">
              {initialTestPageText.paragraph1}
            </p>
            <p className="text-md font-normal text-center">
              {initialTestPageText.paragraph2}
            </p>
          </div>
          <div className="flex justify-center">
            <Button
              variant="primary"
              className="mb-2 mr-2 text-md"
              onClick={() => setTestStarted(true)}
            >
              {initialTestPageText.startButtonText}{" "}
              <Lucide icon="Edit" className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </PageContainer>
      ) : (
        <InitialTest />
      )}
    </>
  );
}

export default InitialTestPage;
