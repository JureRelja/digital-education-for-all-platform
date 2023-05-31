import { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { selectTopMenu } from "../../stores/topMenuSlice";
import { useAppSelector } from "../../stores/hooks";
import _, { set } from "lodash";
import { FormattedMenu, linkTo, nestedMenu } from "./top-menu";
import Lucide from "../../base-components/Lucide";
import logoUrl from "../../assets/images/logo.svg";
import clsx from "clsx";
import MobileMenu from "../../components/MobileMenu";
import bannersUrl from "../../assets/Visibility_1.png";
import { useSelector } from "react-redux";
import { topMenuTextEng } from "../../text/topMenu/Text";
import useText from "../../hooks/textLanguage";
import Breadcrumb from "../../base-components/Breadcrumb";

function Main() {
  const location = useLocation();
  const navigate = useNavigate();
  const [formattedMenu, setFormattedMenu] = useState<Array<FormattedMenu>>([]);
  const topMenuStore = useAppSelector(selectTopMenu);
  const topMenu = () => nestedMenu(topMenuStore, location);

  const topMenuText = useText(
    topMenuTextEng,
    topMenuTextEng,
    topMenuTextEng,
    topMenuTextEng,
    topMenuTextEng
  );

  // Getting user data from redux store
  const firstName = useSelector((state: any) => state.user.userData.firstName);
  const lastName = useSelector((state: any) => state.user.userData.lastName);
  const userCode = useSelector((state: any) => state.user.userCode);

  useEffect(() => {
    if (userCode === "") {
      return navigate("/login"); // If there is no user code, redirect to login page
    }
  }, [userCode]);

  // Checkin if the user completed the initial test to know whether to hide it from the menu or not
  const initialTestStatus = useSelector(
    (state: any) => state.user.initialTestCompleted
  );

  useEffect(() => {
    setFormattedMenu(topMenu());
  }, [topMenuStore, location.pathname]);

  return (
    <div className="py-2">
      <MobileMenu />
      {/* BEGIN: Top Bar */}
      <div className="border-b border-white/[0.09] mt-[2.2rem] md:-mt-5 -mx-3 sm:-mx-8 px-3 sm:px-8 pt-3 md:pt-0 mb-10 ">
        <div className="flex items-center justify-between h-[70px] z-[51] relative">
          {/* BEGIN: Logo */}
          <div className="hidden -intro-x md:flex ">
            <img
              alt="Midone Tailwind HTML Admin Template"
              className="w-6"
              src={logoUrl}
            />
            <span className="ml-3 text-lg text-white"> Educate Me </span>
          </div>

          {/* BEGIN: Breadcrumb */}
          {/* <Breadcrumb
            light
            className="h-full md:ml-10 md:pl-5 md:border-l border-white/[0.08] mr-auto -intro-x"
          >
            <Breadcrumb.Link to="/" active={true}></Breadcrumb.Link>
            <Breadcrumb.Link to="/" active={true}>
              fa
            </Breadcrumb.Link>
          </Breadcrumb> */}
          {/* END: Breadcrumb  */}

          {/* BEGIN: Welcome {firstName} + {lastName} */}
          <div className="h-full md:pl-5 md:border-l border-white/[0.08] flex justify-center items-center text-white intro-x">
            <h2>
              {topMenuText.welcome} {firstName} {lastName}!
            </h2>
          </div>
          {/* END: Welcome {firstName} + {lastName} */}
        </div>
      </div>
      {/* END: Top Bar */}
      {/* BEGIN: Top Menu */}
      <nav className="relative z-50 hidden md:block">
        <ul className="pb-3 xl:pb-0 xl:px-[50px] flex flex-wrap">
          {formattedMenu.map((menu, menuKey) => (
            <li
              className={clsx([
                "relative [&:hover>ul]:block [&:hover>a>div:nth-child(2)>svg]:-rotate-90 ",
                !menu.active &&
                  "[&:hover>a>div:nth-child(1)]:before:bg-white/5 [&:hover>a>div:nth-child(1)]:before:dark:bg-darkmode-500/70 ",
              ])}
              key={menuKey}
            >
              <MenuLink
                className={clsx({
                  [`opacity-0 translate-y-[50px] animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards animate-delay-${
                    (menuKey + 1) * 10
                  }`]: !menu.active,
                })}
                menu={menu}
                level="first"
              ></MenuLink>
            </li>
          ))}
        </ul>
      </nav>
      {/* END: Top Menu */}
      {/* BEGIN: Content */}
      <div className="rounded-[30px] min-w-0 flex-1 flex flex-col justify-between items-center pb-3 bg-slate-100 px-4 md:px-[22px] max-w-full md:max-w-auto before:content-[''] before:w-full before:h-px before:block min-h-[80vh]">
        <div className="flex flex-col justify-start items-center flex-1 w-full  max-w-[1000px]">
          <Outlet />
        </div>
        <div className="mt-5 py-2 xl:border-t-slate-300 xl:border-t-[1px] flex flex-col gap-2 text-center justify-center items-center align-middle w-fit">
          <img src={bannersUrl} className="md:w-2/4  w-full" />
          <p className="text-slate-600 text-xs">{topMenuText.disclaimer}</p>
        </div>
      </div>

      {/* END: Content */}
    </div>
  );
}

function MenuLink(props: {
  className?: string;
  menu: FormattedMenu;
  level: "first" | "second" | "third";
}) {
  const navigate = useNavigate();

  return (
    <a
      href={props.menu.subMenu ? "#" : props.menu.pathname}
      className={clsx([
        "h-[55px] rounded-full xl:rounded-b-none xl:rounded-t-[1rem] flex items-center text-white relative",
        props.level == "first" && "px-5 mr-1",
        props.level != "first" && "px-0 mr-0",
        props.level == "first" && props.menu.active && "z-10 bg-slate-100",

        props.level == "first" &&
          props.menu.active &&
          "before:content-[''] before:w-[20px] before:h-[20px] before:-ml-[20px] before:rotate-90 before:scale-[1.04] before:bg-[length:100%] before:bg-menu-corner before:absolute before:bottom-0 before:left-0 before:hidden before:xl:block dark:before:bg-menu-corner-dark",
        props.level == "first" &&
          props.menu.active &&
          "after:content-[''] after:w-[20px] after:h-[20px] after:-mr-[20px] after:rotate-180 after:scale-[1.04] after:bg-[length:100%] after:bg-menu-corner after:absolute after:bottom-0 after:right-0 after:hidden after:xl:block dark:after:bg-menu-corner-dark",
        props.className,
      ])}
      onClick={(event) => {
        event.preventDefault();
        linkTo(props.menu, navigate);
      }}
    >
      <div
        className={clsx([
          "dark:text-slate-400",
          props.level == "first" &&
            props.menu.active &&
            "text-primary dark:text-white",
          !props.menu.active &&
            "before:content-[''] before:z-[-1] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:rounded-full xl:before:rounded-b-none xl:before:rounded-t-lg before:transition before:ease-in before:duration-100",
        ])}
      >
        <Lucide icon={props.menu.icon} />
      </div>
      <div
        className={clsx([
          "ml-3 flex items-center whitespace-nowrap dark:text-slate-400",
          props.level == "first" &&
            props.menu.active &&
            "text-black font-medium dark:text-white",
          props.level != "first" && "w-full",
        ])}
      >
        {props.menu.title}
      </div>
    </a>
  );
}

export default Main;
