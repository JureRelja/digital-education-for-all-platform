import React from "react";
import { twMerge } from "tailwind-merge";

type Margin = {
  margin?: "sm" | "md";
  children: React.ReactNode;
};

function index(props: Margin) {
  return (
    <h1
      className={twMerge([
        `text-3xl mt-5 text-bold opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards pb-2 border-b-slate-300 border-b-[1px] w-full text-center`,
        props.margin == "sm" ? "mb-2" : "mb-6",
        ,
      ])}
    >
      {props.children}
    </h1>
  );
}

export default index;
