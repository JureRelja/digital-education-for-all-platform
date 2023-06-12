import Tippy from "@tippyjs/react";
import { useState } from "react";
import "tippy.js/dist/tippy.css"; // optional
import { resultsTextEn } from "../../text/jobSuggestion/ResultsText";
import Button from "../../base-components/Button";
import Progress from "../../base-components/Progress";
import useText from "../../hooks/textLanguage";
import { Dialog } from "../../base-components/Headless";
import Lucide from "../../base-components/Lucide";

type RIASECType = {
  title: string;
  value: number;
  width: string;
  color: string;
  characteristics: string;
  personalCharacteristics: Array<string>;
  jobs: Array<string>;
  activities: Array<string>;
};

function index(props: RIASECType) {
  const [showCharacteristicsModal, setShowCharacteristics] = useState(false);
  const [showCareersModal, setShowCareers] = useState(false);

  const resultsText = useText(
    resultsTextEn,
    resultsTextEn,
    resultsTextEn,
    resultsTextEn,
    resultsTextEn
  );

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center md:place-items-end gap-1 w-full">
        <div className="flex flex-col gap-2 w-full justify-center items-center">
          <h1 className="text-md font-bold">{props.title}</h1>
          <Progress className="h-7 rounded-lg flex gap-2">
            {props.value == 0 ? (
              <p className="text-center mt-1">{props.value + "%"}</p>
            ) : (
              <Progress.Bar
                className={props.color}
                style={{ width: props.width }}
              >
                {props.value}%
              </Progress.Bar>
            )}
          </Progress>
        </div>
        <div className="flex flex-col md:flex-row  gap-1 justify-start items-center">
          <Button
            variant={
              props.color === "bg-gray-300" ? "soft-dark" : "soft-primary"
            }
            className="h-7 w-full"
            onClick={() => setShowCharacteristics(true)}
          >
            {resultsText.characteristics}
          </Button>

          <Button
            variant={
              props.color === "bg-gray-300" ? "soft-secondary" : "soft-success"
            }
            className="h-7 w-full"
            onClick={() => setShowCareers(true)}
          >
            {resultsText.careers}
          </Button>
        </div>
      </div>

      {/* Modal for the characteristics start */}
      <Dialog
        size="xl"
        open={showCharacteristicsModal}
        onClose={() => {
          setShowCharacteristics(false);
        }}
      >
        <Dialog.Panel>
          <a
            onClick={(event: React.MouseEvent) => {
              event.preventDefault();
              setShowCharacteristics(false);
            }}
            className="absolute top-0 right-0 mt-3 mr-3"
            href="#"
          >
            <Lucide icon="X" className="w-8 h-8 text-slate-400" />
          </a>
          <div>
            <Dialog.Title className="text-lg">
              {props.title} - {resultsText.characteristics}
            </Dialog.Title>
            <Dialog.Description className="flex flex-col gap-3">
              <p>{props.characteristics}</p>
              <div>
                <span className="underline font-bold">
                  {resultsText.characteristicsList}
                </span>
                <ul className="list-disc list-inside mt-2">
                  {props.personalCharacteristics.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="underline font-bold">
                  {resultsText.activitiesList}
                </span>
                <ul className="list-disc mt-2 list-inside">
                  {props.activities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Dialog.Description>
          </div>
        </Dialog.Panel>
      </Dialog>
      {/* Modal for the characteristics end */}

      {/* Modal for the careers start */}
      <Dialog
        size="xl"
        open={showCareersModal}
        onClose={() => {
          setShowCareers(false);
        }}
      >
        <Dialog.Panel>
          <a
            onClick={(event: React.MouseEvent) => {
              event.preventDefault();
              setShowCareers(false);
            }}
            className="absolute top-0 right-0 mt-3 mr-3"
            href="#"
          >
            <Lucide icon="X" className="w-8 h-8 text-slate-400" />
          </a>
          <div>
            <Dialog.Title className="text-lg">
              {props.title} - {resultsText.careers}
            </Dialog.Title>
            <Dialog.Description>
              <ul className="list-disc list-inside">
                {props.jobs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-2 ">{resultsText.searchOnline}</p>
              <a
                href={resultsText.searchOnlineLink}
                className="underline hover:opacity-70"
              >
                {resultsText.searchOnlineLink}
              </a>
            </Dialog.Description>
          </div>
        </Dialog.Panel>
      </Dialog>
      {/* Modal for the careers end */}
    </>
  );
}

export default index;
