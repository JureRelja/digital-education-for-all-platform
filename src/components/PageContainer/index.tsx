import React from "react";

function index(props: any) {
  return (
    <div className="flex flex-col gap-8 items-center opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards w-full">
      {props.children}
    </div>
  );
}

export default index;
