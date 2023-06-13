import React from "react";
import { twMerge } from "tailwind-merge";

type Gap = {
  gap?: "sm" | "md";
  children: React.ReactNode;
};

function index(props: Gap) {
  return (
    <div
      className={twMerge([
        `flex flex-col  items-center opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards w-full`,
        props.gap == "sm" && "gap-3",
        props.gap == "md" ? "gap-5" : "gap-8",
      ])}
    >
      {props.children}
    </div>
  );
}

export default index;
