import React from "react";

function index(props: any) {
  return (
    <h1
      className={`text-3xl mt-5 text-bold opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards pb-2 border-b-slate-300 border-b-[1px] mb-6 w-full text-center ${props.className}`}
    >
      {props.children}
    </h1>
  );
}

export default index;
