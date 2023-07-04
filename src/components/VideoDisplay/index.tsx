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
    <div className="w-full md:w-[700px] lg:w-[900px] h-[500px] flex justify-center items-center overflow-hidden">
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
          src={props.src}
          title={props.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="w-full h-full z-10"
          allowFullScreen
          frameBorder="0"
          onLoad={handleIframeLoad}
        ></iframe>
      </div>
    </div>
  );
}

export default index;
