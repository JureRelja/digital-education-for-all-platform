import { useState } from "react";
import LoadingIcon from "../../base-components/LoadingIcon";
import { twMerge } from "tailwind-merge";

interface Props {
  src: string;
  title: string;
}

function index(props: Props) {
  const [loading, setLoading] = useState(true);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  return (
    <div className="w-full md:w-[600px] lg:w-[1000px] h-[400px] md:h-[600px] flex justify-center items-center overflow-hidden">
      <div
        className={twMerge([
          "w-full h-full flex justify-center items-center ",
          loading ? "relative" : "",
        ])}
      >
        {loading && (
          <LoadingIcon
            icon="oval"
            className="w-10 h-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            color="#1E3A8A"
          />
        )}
        <iframe
          title={props.title}
          src={props.src}
          className="w-full h-full"
          scrolling="yes"
          allowFullScreen
          onLoad={handleIframeLoad}
        ></iframe>
      </div>
    </div>
  );
}

export default index;
