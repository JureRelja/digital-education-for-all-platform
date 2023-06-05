import React from "react";

interface Props {
  src: string;
  title: string;
}

function index(props: Props) {
  return (
    <div className="w-full md:w-[700px] lg:w-[900px] h-[500px] flex justify-center items-center overflow-hidden">
      <div className="w-full h-full flex justify-center items-center ">
        <iframe
          src={props.src}
          title={props.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="w-full h-full"
          allowFullScreen
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}

export default index;
