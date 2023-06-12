import { twMerge } from "tailwind-merge";
import { Dialog as HeadlessDialog, Transition } from "@headlessui/react";
import { Fragment, createContext, useContext, useRef, useState } from "react";

type Size = "sm" | "md" | "lg" | "xl";

const dialogContext = createContext<{
  open: boolean;
  zoom: boolean;
  size: Size;
  center?: boolean;
}>({
  open: false,
  zoom: false,
  size: "lg",
});

function Dialog({
  children,
  className,
  as = "div",
  open = false,
  onClose,
  staticBackdrop,
  size = "lg",
  ...props
}: ExtractProps<typeof HeadlessDialog> & {
  size?: Size;
  staticBackdrop?: boolean;
  center?: boolean;
}) {
  const focusElement = useRef<HTMLElement | null>(null);
  const [zoom, setZoom] = useState(false);

  return (
    <dialogContext.Provider
      value={{
        open: open,
        zoom: zoom,
        size: size,
      }}
    >
      <Transition appear as={Fragment} show={open}>
        <HeadlessDialog
          as={as}
          onClose={(value) => {
            if (!staticBackdrop) {
              return onClose(value);
            } else {
              setZoom(true);
              setTimeout(() => {
                setZoom(false);
              }, 300);
            }
          }}
          initialFocus={focusElement}
          className={twMerge(["relative z-[60]", className])}
          {...props}
        >
          {children}
        </HeadlessDialog>
      </Transition>
    </dialogContext.Provider>
  );
}

Dialog.Panel = ({
  children,
  className,
  as = "div",
  ...props
}: ExtractProps<typeof HeadlessDialog.Panel> & {
  size?: Size;
  center?: boolean;
}) => {
  const dialog = useContext(dialogContext);
  return (
    <>
      <Transition.Child
        as="div"
        enter="ease-in-out duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in-out duration-[400ms]"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="fixed inset-0 bg-black/60"
        aria-hidden="true"
      />
      <Transition.Child
        as="div"
        enter="ease-in-out duration-500"
        enterFrom="opacity-0 -mt-16"
        enterTo="opacity-100 mt-0 pt-16"
        leave="ease-in-out duration-[400ms]"
        leaveFrom="opacity-100 pt-16"
        leaveTo="opacity-0 -mt-16 pt-0"
        className="fixed inset-0 pb-16 overflow-y-auto"
      >
        <HeadlessDialog.Panel
          as={as}
          className={twMerge([
            "w-[100%] mx-auto bg-white relative rounded-md shadow-md transition-transform overflow-auto max-h-[95vh] top-[50%] translate-y-[-50%] ",
            dialog.center == false && "lg:top-0 lg:translate-y-0",
            dialog.size == "md" && "sm:w-[460px]",
            dialog.size == "sm" && "w-full md:w-fit ",
            dialog.size == "lg" && "w-full md:w-fit",
            dialog.size == "xl" && "sm:w-[600px] lg:w-[900px]",
            dialog.zoom && "scale-105",
            className,
          ])}
          {...props}
        >
          {children}
        </HeadlessDialog.Panel>
      </Transition.Child>
    </>
  );
};

Dialog.Title = ({
  children,
  className,
  as = "div",
  ...props
}: ExtractProps<typeof HeadlessDialog.Title>) => {
  return (
    <HeadlessDialog.Title
      as={as}
      className={twMerge([
        "flex items-center px-5 py-3 border-b border-slate-200/60 dark:border-darkmode-400",
        className,
      ])}
      {...props}
    >
      {children}
    </HeadlessDialog.Title>
  );
};

Dialog.Description = ({
  children,
  className,
  as = "div",
  ...props
}: ExtractProps<typeof HeadlessDialog.Description>) => {
  return (
    <HeadlessDialog.Description
      as={as}
      className={twMerge(["p-5", className])}
      {...props}
    >
      {children}
    </HeadlessDialog.Description>
  );
};

Dialog.Footer = <C extends React.ElementType = "div">({
  children,
  className,
  as,
  ...props
}: {
  as?: C;
} & React.PropsWithChildren &
  React.ComponentPropsWithoutRef<C>) => {
  const Component = as || "div";

  return (
    <Component
      className={twMerge([
        "px-5 py-3 text-right border-t border-slate-200/60 dark:border-darkmode-400",
        className,
      ])}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Dialog;
