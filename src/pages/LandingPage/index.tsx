import logoUrl from "../../assets/images/logo.svg";
import { FormInput, FormCheck } from "../../base-components/Form";
import Button from "../../base-components/Button";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "../../stores/languageSlice";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import illustrationUrl from "../../assets/images/landing-page-woman-illustration.png";
import Visibility from "../../components/VisibilitySign";

function Main() {
  const language = useSelector((state: any) => state.language.len);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLanguageChange = (len: any) => {
    dispatch(changeLanguage(len));
  };

  return (
    <>
      <div
        className={clsx([
          "-m-3 sm:-mx-8 p-3 sm:px-8 relative h-screen  lg:overflow-hidden bg-primary xl:bg-white dark:bg-darkmode-800 xl:dark:bg-darkmode-600",
          "before:hidden before:xl:block before:content-[''] before:w-[57%] before:-mt-[28%] before:-mb-[16%] before:-ml-[13%] before:absolute before:inset-y-0 before:left-0 before:transform before:rotate-[-4.5deg] before:bg-primary/20 before:rounded-[100%] before:dark:bg-darkmode-400",
          "after:hidden after:xl:block after:content-[''] after:w-[57%] after:-mt-[20%] after:-mb-[13%] after:-ml-[13%] after:absolute after:inset-y-0 after:left-0 after:transform after:rotate-[-4.5deg] after:bg-primary after:rounded-[100%] after:dark:bg-darkmode-700",
        ])}
      >
        <div className="container relative z-10 sm:px-10 ">
          <div className="grid-cols-2 gap-4 xl:grid flex flex-col">
            {/* BEGIN: Login Info */}
            <div className="flex-col hidden min-h-screen xl:flex">
              <div className="flex items-center pt-5 -intro-x">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="w-6"
                  src={logoUrl}
                />
                <span className="ml-3 text-lg text-white"> Educate Me </span>
              </div>
              <div className="my-auto">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="w-1/2 -mt-16 -intro-x"
                  src={illustrationUrl}
                />
                <div className="mt-10 text-4xl font-medium leading-tight text-white">
                  Welcome
                </div>
                <div className="mt-5 text-lg text-white -intro-x text-opacity-70 dark:text-slate-400">
                  Digital Education for All
                </div>
              </div>
            </div>
            {/* Mobile welcome img start */}
            <div className="flex flex-col justify-center items-center xl:hidden -mb-16">
              <img
                alt="Midone Tailwind HTML Admin Template"
                className="w-1/2 sm:w-1/3 xl:w-1/2"
                src={illustrationUrl}
              />
              <div className="text-3xl font-medium leading-tight text-white -intro-x">
                Welcome
              </div>
              <div className="mt-5 text-lg text-white -intro-x text-opacity-70">
                Digital Education for All
              </div>
            </div>
            {/* Mobile welcome img end */}

            {/* END: Login Info */}
            {/* BEGIN: Login Form */}
            <div className="flex py-5 my-10 xl:h-auto xl:py-0 xl:my-0 flex-col gap-2 justify-center items-center">
              <div className="w-full flex flex-col align-bottom justify-center items-center px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-full xl:h-full ">
                <h2 className="text-2xl font-bold text-center intro-x xl:text-3xl xl:text-center">
                  Select your language
                </h2>
                <div className="mt-8 intro-x flex justify-center items-center gap-4 ">
                  <div className="flex justify-center items-center align-middle xl:gap-6 gap-2">
                    <FormCheck className="mt-2 mr-2 sm:mt-0">
                      <FormCheck.Input
                        id="radio-en"
                        type="radio"
                        value="en"
                        checked={language === "en"}
                        onChange={(e) => handleLanguageChange(e.target.value)}
                      />
                      <FormCheck.Label htmlFor="radio-en">
                        <div className="border-slate-300 border-[2px] flex justify-center items-center h-6 w-[31px] xl:h-12 xl:w-[63px]">
                          <span className="fi fi-gb hover:opacity-80 transition-all ease-in-out cursor-pointer w-full h-full"></span>
                        </div>
                      </FormCheck.Label>
                    </FormCheck>
                    <FormCheck className="mt-2 mr-2 sm:mt-0">
                      <FormCheck.Input
                        id="radio-hr"
                        type="radio"
                        value="hr"
                        onChange={(e) => handleLanguageChange(e.target.value)}
                      />
                      <FormCheck.Label htmlFor="radio-hr">
                        <div className="border-slate-200 border-[2px] flex justify-center items-center h-6 w-[31px] xl:h-12 xl:w-[63px]">
                          <span className="fi fi-hr hover:opacity-80 transition-all ease-in-out cursor-pointer  h-full w-full"></span>
                        </div>
                      </FormCheck.Label>
                    </FormCheck>

                    <FormCheck className="mt-2 mr-2 sm:mt-0">
                      <FormCheck.Input
                        id="radio-sl"
                        type="radio"
                        value="sl"
                        onChange={(e) => handleLanguageChange(e.target.value)}
                      />
                      <FormCheck.Label htmlFor="radio-sl">
                        <div className="border-slate-300 border-[2px] flex justify-center items-center h-6 w-[31px] xl:h-12 xl:w-[63px]">
                          <span className="fi fi-si hover:opacity-80 transition-all ease-in-out cursor-pointer w-full h-full"></span>
                        </div>
                      </FormCheck.Label>
                    </FormCheck>
                    <FormCheck className="mt-2 mr-2 sm:mt-0">
                      <FormCheck.Input
                        id="radio-pl"
                        type="radio"
                        value="pl"
                        onChange={(e) => handleLanguageChange(e.target.value)}
                      />
                      <FormCheck.Label htmlFor="radio-pl">
                        <div className="border-slate-200 border-[2px] flex justify-center items-center  h-6 w-[31px] xl:h-12 xl:w-[63px]">
                          <span className="fi fi-pl hover:opacity-80 transition-all ease-in-out cursor-pointer w-full h-full"></span>
                        </div>
                      </FormCheck.Label>
                    </FormCheck>
                    <FormCheck className="mt-2 mr-2 sm:mt-0">
                      <FormCheck.Input
                        id="radio-cz"
                        type="radio"
                        value="cz"
                        onChange={(e) => handleLanguageChange(e.target.value)}
                      />
                      <FormCheck.Label htmlFor="radio-cz">
                        <div className="border-slate-200 border-[2px] flex justify-center items-center h-6 w-[31px] xl:h-12 xl:w-[63px]">
                          <span className="fi fi-cz hover:opacity-80 transition-all ease-in-out cursor-pointer w-full h-full"></span>
                        </div>
                      </FormCheck.Label>
                    </FormCheck>
                  </div>
                </div>

                <div className="mt-5 text-center intro-x xl:mt-8 xl:text-center">
                  <Button
                    variant="primary"
                    className="w-full px-4 py-3 align-top xl:w-32 xl:mr-3"
                    onClick={() => navigate("/login")}
                  >
                    Continue
                  </Button>
                </div>
              </div>
              <Visibility />
            </div>
            {/* END: Login Form */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
