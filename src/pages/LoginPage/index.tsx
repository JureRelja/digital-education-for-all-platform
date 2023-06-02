import logoUrl from "../../assets/images/logo.svg";
import { FormInput } from "../../base-components/Form";
import Button from "../../base-components/Button";
import clsx from "clsx";
import { loginPageTextEng } from "../../text/loginPage/Text";
import useText from "../../hooks/textLanguage";
import { useNavigate } from "react-router-dom";
import { database } from "../../firebase";
import { ref, set, onValue } from "firebase/database";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeUserCode,
  changeUserData,
  changeRIASEC,
  changeInitialTestCompleted,
  changeCoursesOrder,
} from "../../stores/userSlice";
import Alert from "../../base-components/Alert/index";
import Lucide from "../../base-components/Lucide/index";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import illustrationUrl from "../../assets/images/landing-page-woman-illustration.png";
import Visibility from "../../components/VisibilitySign";
import YearPicker from "../../components/DatePicker/YearPicker";
import MonthPicker from "../../components/DatePicker/MonthPicker";
import DayPicker from "../../components/DatePicker/DayPicker";
import FormLabel from "../../base-components/Form/FormLabel";

function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginPageText = useText(
    //Custom hook for getting the right page text
    loginPageTextEng,
    loginPageTextEng,
    loginPageTextEng,
    loginPageTextEng,
    loginPageTextEng
  );

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);

  const [isFormValid, setIsFormValid] = useState(true); //Checking if the data is valid

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      firstName.trim().length === 0 ||
      lastName.trim().length === 0 ||
      year === 0 ||
      month === 0 ||
      day === 0
    ) {
      setIsFormValid(false);
    } else {
      //Store user in database
      setIsFormValid(true);
      authUser();
    }
  };

  const authUser = () => {
    const userCode =
      firstName.toLocaleLowerCase() +
      lastName.toLocaleLowerCase() +
      year +
      month +
      day; // Creating userCode

    const userData = {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: { year, month, day },
    };

    dispatch(changeUserCode(userCode)); //Updating store with userCode
    dispatch(changeUserData(userData)); //Updating store with userData

    onValue(ref(database, "users/" + userCode), (snapshot) => {
      if (snapshot.exists()) {
        //User exists in database

        // Updating store with data from database
        if (snapshot.val().RIASEC) {
          dispatch(changeRIASEC(snapshot.val().RIASEC));
        }

        // Checking if initial test is completed to know where to redirect the user
        if (snapshot.val().initialTestCompleted) {
          // Updating store with initial test data
          dispatch(
            changeInitialTestCompleted({
              changeInitialTestCompleted: true,
            })
          );
          dispatch(changeCoursesOrder(snapshot.val().coursesOrder));
          navigate("/dashboard/courses");
        } else {
          navigate("/dashboard/initial-test");
        }
      } else {
        //User doesn't exist in database

        set(ref(database, "users/" + userCode), {
          userCode: userCode,
          userData: userData,
          initialTestCompleted: false,
        }).then(() => {
          navigate("/dashboard/initial-test");
        });
      }
    });
  };

  return (
    <>
      <div
        className={clsx([
          "-m-3 sm:-mx-8 p-3 sm:px-8 relative h-screen xl:overflow-clip bg-primary xl:bg-white dark:bg-darkmode-800 xl:dark:bg-darkmode-600",
          "before:hidden before:xl:block before:content-[''] before:w-[57%] before:-mt-[28%] before:-mb-[16%] before:-ml-[13%] before:absolute before:inset-y-0 before:left-0 before:transform before:rotate-[-4.5deg] before:bg-primary/20 before:rounded-[100%] before:dark:bg-darkmode-400",
          "after:hidden after:xl:block after:content-[''] after:w-[57%] after:-mt-[20%] after:-mb-[13%] after:-ml-[13%] after:absolute after:inset-y-0 after:left-0 after:transform after:rotate-[-4.5deg] after:bg-primary after:rounded-[100%] after:dark:bg-darkmode-700",
        ])}
      >
        <div className="container relative z-10 sm:px-10">
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

                <div className="mt-10 text-4xl font-medium leading-tight text-white -intro-x">
                  {loginPageText.welcome}
                </div>
                <div className="mt-5 text-lg text-white -intro-x text-opacity-70">
                  {loginPageText.headingTextLeft} <br></br>{" "}
                  {loginPageText.headingTextRight}
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
              <div className="mt-5 text-lg text-white -intro-x text-opacity-70 text-center">
                Development of Technology Enhanced Learning for Unemployed
                Persons
              </div>
            </div>
            {/* Mobile welcome img end */}

            {/* END: Login Info */}
            {/* BEGIN: Login Form */}
            <div className="flex py-5 my-10 xl:h-auto xl:py-0 xl:my-0 flex-col gap-2 justify-center items-center ">
              <div className="w-full flex flex-col align-top justify-center px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-full xl:h-full">
                <div className="flex flex-col gap-3">
                  <h2 className="text-2xl font-bold text-center intro-x xl:text-3xl xl:text-center">
                    {loginPageText.title}
                  </h2>
                  <p className="text-md font-normal text-center intro-x xl:text-normal xl:text-left">
                    {loginPageText.firstParagraph}
                  </p>
                  <p className="text-md font-normal text-center intro-x xl:text-normal xl:text-left">
                    {loginPageText.secondParagraph}
                  </p>
                  <p className="text-md font-normal text-center intro-x xl:text-normal xl:text-left">
                    {loginPageText.thirdParagraph}
                  </p>
                </div>

                {/* Login from start */}
                <form
                  className="mt-4 intro-x flex flex-col justify-center gap-3"
                  onSubmit={handleSubmit}
                >
                  <div className="flex justify-center items-center xl:gap-4 xl:flex-row flex-col">
                    <FormLabel htmlFor="first-name-input" className="sm:w-24">
                      {loginPageText.firstName}
                    </FormLabel>
                    <FormInput
                      id="first-name-input"
                      type="text"
                      className="block px-4 py-3 intro-x login__input xl:w-[300px]"
                      placeholder={loginPageText.firstName}
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      maxLength={30}
                    />
                  </div>
                  <div className="flex justify-center items-center xl:gap-4 xl:flex-row flex-col">
                    <FormLabel htmlFor="last-name-input" className="sm:w-24">
                      {loginPageText.secondName}
                    </FormLabel>
                    <FormInput
                      id="last-name-input"
                      type="text"
                      className="block px-4 py-3 intro-x login__input xl:w-[300px]"
                      placeholder={loginPageText.secondName}
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      maxLength={30}
                    />
                  </div>
                  <div className="flex justify-center items-center xl:gap-4 xl:flex-row flex-col">
                    <FormLabel className="sm:w-24">
                      {loginPageTextEng.date}
                    </FormLabel>
                    <div className="flex justify-between items-center w-full xl:w-[300px]">
                      <DayPicker
                        month={day}
                        onChange={(e: any) => setDay(parseInt(e.target.value))}
                      />

                      <MonthPicker
                        value={month}
                        onChange={(e: any) =>
                          setMonth(parseInt(e.target.value))
                        }
                      />
                      <YearPicker
                        value={year}
                        onChange={(e: any) => setYear(parseInt(e))}
                      />
                    </div>
                  </div>
                  <div className="mt-3 text-center intro-x xl:text-center">
                    <Button
                      variant="primary"
                      className="w-full px-4 py-3 align-top xl:w-32 xl:mr-3"
                      onClick={handleSubmit}
                    >
                      {loginPageText.submit}
                    </Button>
                  </div>
                </form>
                {/* Login from end */}

                {!isFormValid ? (
                  <Alert variant="danger" className="flex items-center mt-5">
                    <Lucide icon="AlertOctagon" className="w-6 h-6 mr-2" />
                    {loginPageText.error}
                  </Alert>
                ) : (
                  ""
                )}
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
