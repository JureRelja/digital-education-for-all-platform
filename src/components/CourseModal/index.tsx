import React, { useState } from "react";
import { Dialog } from "../../base-components/Headless";
import Lucide from "../../base-components/Lucide";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type Props = {
  overlayContent: any;
  resourceType: string;
  text: string;
  icon: any;
  iconColor: string;
  position: string;
};

function index(props: Props) {
  const [showModal, setShowModal] = useState(false);

  {
    /* BEGIN: Modal With Close Button */
  }
  return (
    <>
      <div
        className="flex justify-center items-center text-center"
        onClick={() => setShowModal(true)}
      >
        <div
          className={clsx([
            "relative zoom-in",
            "before:content-[''] before:w-[90%] before:shadow-[0px_3px_20px_#0000000b] before:bg-slate-50 before:h-full before:mt-3 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70",
          ])}
        >
          <div className="p-5 box w-[200px] h-[220px]">
            <div className="flex w-full justify-center items-center">
              <Lucide
                icon={props.icon}
                className={`w-[30px] h-[30px]  ${props.iconColor}`}
              />
            </div>
            <div className="mt-6 text-3xl font-medium leading-8">
              {props.resourceType}
            </div>
            <div className="mt-1 text-base text-slate-500">{props.text}</div>
          </div>
        </div>
      </div>
      <Dialog
        open={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <Dialog.Panel>
          <a
            onClick={(event: React.MouseEvent) => {
              event.preventDefault();
              setShowModal(false);
            }}
            className={twMerge([
              "absolute mt-3 z-50",
              props.position == "upper-left"
                ? "top-0 left-0 ml-3"
                : "top-0 right-0 mr-3",
            ])}
            href="#"
          >
            <Lucide icon="X" className="w-8 h-8 text-slate-400 " />
          </a>
          {props.overlayContent}
        </Dialog.Panel>
      </Dialog>
    </>
  );
  {
    /* END: Modal With Close Button */
  }
}

export default index;
