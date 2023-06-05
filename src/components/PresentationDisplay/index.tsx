import React from "react";

interface Props {
  src: string;
  title: string;
}

function index(props: Props) {
  return (
    <div className="w-full md:w-[600px] lg:w-[1000px] h-[400px] md:h-[600px] flex justify-center items-center overflow-hidden">
      <div className="w-full h-full flex justify-center items-center">
        <iframe
          title={props.title}
          src={props.src}
          className="w-full h-full"
          scrolling="yes"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default index;
