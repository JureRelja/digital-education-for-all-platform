import { useSelector } from "react-redux";

import { useNavigate } from "react-router";
import Lucide from "../../base-components/Lucide";
import Table from "../../base-components/Table";
import { coursesEng } from "../../text/courses/Courses";
import { coursesPageTextEng } from "../../text/courses/CoursesPageText";
import clsx from "clsx";
import { Link } from "react-router-dom";
import useText from "../../hooks/textLanguage";

function index() {
  const navigate = useNavigate(); //Navigation hook
  const coursesOrder = useSelector((state: any) => state.user.coursesOrder); //Courses order
  const courses = coursesEng; //Courses

  const orderedCourses = coursesOrder.map((order: any) => {
    const newOrdCourse = courses.find((course: any) => course.id == order);
    return { ...newOrdCourse, completed: order.completed };
  }); //Ordered courses

  const coursesPageText = useText(
    coursesPageTextEng,
    coursesPageTextEng,
    coursesPageTextEng,
    coursesPageTextEng,
    coursesPageTextEng
  ); //Courses page text

  return (
    <div className="flex flex-col justify-center items-center gap-4 lg:w-[70%] max-w-[900px]">
      <h2 className="text-3xl mt-5 text-bold text-center opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards">
        {coursesPageText.title}
      </h2>
      <p className="text-md font-normal text-center opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards ">
        {coursesPageText.paragraph}
      </p>

      <div className="overflow-auto intro-y lg:overflow-visible sm:mt-0 w-full">
        <Table className="border-spacing-y-[10px] border-separate sm:mt-2">
          <Table.Thead>
            <Table.Tr>
              <Table.Th className="border-b-0 whitespace-nowrap">
                {coursesPageText.tableTextCourses}
              </Table.Th>
              <Table.Th className="border-b-0 whitespace-nowrap">
                {coursesPageText.tableTextStatus}
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {orderedCourses.map((course: any) => (
              <Table.Tr key={course.id} className="intro-x">
                <Table.Td className="first:rounded-l-md last:rounded-r-md bg-white border-b-0 shadow-[20px_3px_20px_#0000000b]">
                  <h2
                    className={clsx([
                      "font-medium",

                      { "text-secondary": course.completed },
                    ])}
                  >
                    {course.title}
                  </h2>
                </Table.Td>
                <Table.Td className="first:rounded-l-md last:rounded-r-md md:w-40 bg-white border-b-0 shadow-[20px_3px_20px_#0000000b]">
                  <div
                    className={clsx([
                      "flex items-center justify-center text-center",

                      { "text-secondary": course.completed },
                    ])}
                  >
                    {course.completed ? (
                      <>
                        <Lucide
                          icon="CheckSquare"
                          className="w-4 h-4 md:mr-2"
                        />
                        <p>{coursesPageText.tableTextCompleted}</p>
                      </>
                    ) : (
                      <p className="md:mr-6">
                        {coursesPageText.tableTextNotCompleted}
                      </p>
                    )}
                  </div>
                </Table.Td>
                <Table.Td className="first:rounded-l-md last:rounded-r-md  md:w-56 bg-white border-b-0 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto">
                  <div className="flex items-center justify-center text-center">
                    {course.completed ? (
                      <Link className="flex items-center md:mr-3" to="/">
                        <Lucide icon="Archive" className="w-4 h-4 md:mr-1" />
                        {coursesPageText.tableTextDownload}
                      </Link>
                    ) : (
                      <Link
                        to={`${course.id}`}
                        className="flex items-center text-primary"
                      >
                        <Lucide icon="Edit3" className="w-4 h-4 md:mr-1" />{" "}
                        {coursesPageText.tableTextStart}
                      </Link>
                    )}
                  </div>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </div>
    </div>
  );
}

export default index;
