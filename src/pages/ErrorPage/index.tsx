import errorIllustration from "../../assets/images/error-illustration.svg";
import Button from "../../base-components/Button";
import { errorPageTextEn } from "../../text/errorPage/text";
import { Link } from "react-router-dom";
import useText from "../../hooks/textLanguage";

function Main() {
  const errorPageText = useText(
    errorPageTextEn,
    errorPageTextEn,
    errorPageTextEn,
    errorPageTextEn,
    errorPageTextEn
  );

  return (
    <>
      <div className="py-2">
        <div className="container">
          {/* BEGIN: Error Page */}
          <div className="flex flex-col items-center justify-center h-screen text-center error-page lg:flex-row lg:text-left">
            <div className="-intro-x lg:mr-20">
              <img
                alt="Midone Tailwind HTML Admin Template"
                className="w-[450px] h-48 lg:h-auto"
                src={errorIllustration}
              />
            </div>
            <div className="mt-10 text-white lg:mt-0">
              <div className="font-medium intro-x text-8xl">404</div>
              <div className="mt-5 text-xl font-medium intro-x lg:text-3xl">
                {errorPageText.paragraph1}
              </div>
              <div className="mt-3 text-lg intro-x">
                {errorPageText.paragraph2}
              </div>
              <Link to="/dashboard">
                <Button className="px-4 py-3 mt-10 text-white border-white intro-x dark:border-darkmode-400 dark:text-slate-200">
                  {errorPageText.btnText}
                </Button>
              </Link>
            </div>
          </div>
          {/* END: Error Page */}
        </div>
      </div>
    </>
  );
}

export default Main;
