import { initialTestPageTextEng } from "../../text/initialTestPage/Text";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import InitialTest from "../../components/InitialTest";
import { useNavigate } from "react-router";
import useText from "../../hooks/textLanguage";

function InitialTestPage() {
  const navigate = useNavigate();

  const initialTestPageText = useText(
    initialTestPageTextEng,
    initialTestPageTextEng,
    initialTestPageTextEng,
    initialTestPageTextEng,
    initialTestPageTextEng
  );

  const [testStarted, setTestStarted] = useState(false);

  const initialTestCompleted = useSelector(
    (state: any) => state.user.initialTestCompleted
  );

  useEffect(() => {
    if (initialTestCompleted) {
      navigate("/dashboard/courses");
    }
  }, [initialTestCompleted]);

  return (
    <>
      {!testStarted ? (
        <div className="flex flex-col gap-6 items-center opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards">
          <h1 className="text-3xl mt-5 text-bold">
            {initialTestPageText.title}
          </h1>
          <div className="flex flex-col gap-5 text-center">
            <p className="text-md font-normal text-center">
              {initialTestPageText.paragraph1}
            </p>
            <p className="text-md font-normal text-center">
              {initialTestPageText.paragraph2}
            </p>
            <p className="text-md font-normal text-center">
              {initialTestPageText.paragraph3}
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
        </div>
      ) : (
        <InitialTest />
      )}
    </>
  );
}

export default InitialTestPage;
