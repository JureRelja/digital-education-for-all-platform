import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import { resultsTextEn } from "../../text/jobSuggestion/ResultsText";
import Button from "../../base-components/Button";
import Progress from "../../base-components/Progress";
import useText from "../../hooks/textLanguage";

type RIASECType = {
  title: string;
  value: number;
  width: string;
  color: string;
  characteristics: string;
  jobs: Array<string>;
};

function index(props: RIASECType) {
  const resultsText = useText(
    resultsTextEn,
    resultsTextEn,
    resultsTextEn,
    resultsTextEn,
    resultsTextEn
  );

  return (
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
      <Tippy content={<span>{props.characteristics}</span>} trigger="click">
        <Button variant="soft-primary" className="h-7">
          {resultsText.characteristics}
        </Button>
      </Tippy>
      <Tippy
        content={props.jobs.map((job: string) => (
          <span key="job">{job}</span>
        ))}
        trigger="click"
        placement="bottom"
      >
        <Button variant="soft-success" className="h-7">
          {resultsText.careers}
        </Button>
      </Tippy>
    </div>
  );
}

export default index;
