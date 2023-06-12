import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Lucide from "../../base-components/Lucide";
import Table from "../../base-components/Table";
import { coursesEn } from "../../text/courses/Courses";
import { coursesPageTextEn } from "../../text/courses/CoursesPageText";
import clsx from "clsx";
import { Link } from "react-router-dom";
import useText from "../../hooks/textLanguage";
import Heading from "../../components/Heading";
import Button from "../../base-components/Button";
import PageContainer from "../../components/PageContainer";
import CoursesCategory from "../../components/CoursesCategory";

type Course = {
  id: number;
  title: string;
  completed: boolean;
  score: number;
};

function index() {
  const navigate = useNavigate(); //Navigation hook
  const coursesOrder = useSelector((state: any) => state.user.coursesOrder); //Courses order
  const initialTestCompleted = useSelector(
    (state: any) => state.user.initialTestCompleted
  ); //Initial test completed
  const courses = useText(
    coursesEn,
    coursesEn,
    coursesEn,
    coursesEn,
    coursesEn
  ); //Courses

  const orderedCourses = coursesOrder.map((order: any) => {
    const newOrdCourse = courses.find((course: any) => course.id == order.id);
    return { ...newOrdCourse, completed: order.completed, score: order.score };
  }); //Ordered courses

  const coursesPageText = useText(
    coursesPageTextEn,
    coursesPageTextEn,
    coursesPageTextEn,
    coursesPageTextEn,
    coursesPageTextEn
  ); //Courses page text

  const redCourses = orderedCourses.filter(
    (course: Course) => course.score <= 2
  );
  const yellowCourses = orderedCourses.filter(
    (course: Course) => course.score > 2 && course.score <= 4
  );
  const greenCourses = orderedCourses.filter(
    (course: Course) => course.score > 4
  );

  return (
    <>
      {!initialTestCompleted ? (
        <PageContainer>
          <Heading>{coursesPageText.title}</Heading>
          <div className="flex flex-col justify-center items-center gap-6">
            <p className="text-md font-normal text-center opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards ">
              {coursesPageText.notCompletedParagraph}
            </p>
            <div className="flex justify-center opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards">
              <Button
                variant="primary"
                className="mb-2 mr-2 text-md"
                onClick={() => navigate("/dashboard/initial-test")}
              >
                {coursesPageText.notCompletedButtonText}{" "}
                <Lucide icon="Edit" className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </PageContainer>
      ) : (
        <PageContainer>
          <Heading>{coursesPageText.title}</Heading>
          <p className="text-md font-normal text-center opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards ">
            {coursesPageText.paragraph}
          </p>

          <div className="overflow-auto intro-y lg:overflow-visible sm:mt-0 w-full ">
            <CoursesCategory
              title={coursesPageText.definitelyTakeCoursesTxt}
              color="text-danger"
              bgColor="bg-red-100"
              courses={redCourses}
            />
            <CoursesCategory
              title={coursesPageText.shouldTakeCoursesTxt}
              color="text-pending"
              bgColor="bg-yellow-100"
              courses={yellowCourses}
            />
            <CoursesCategory
              title={coursesPageText.couldTakeCoursesTxt}
              color="text-success"
              bgColor="bg-green-100"
              courses={greenCourses}
            />
          </div>
        </PageContainer>
      )}
    </>
  );
}

export default index;
