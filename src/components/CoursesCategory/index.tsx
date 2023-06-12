import React from "react";
import Lucide from "../../base-components/Lucide";
import Table from "../../base-components/Table";
import { coursesPageTextEn } from "../../text/courses/CoursesPageText";
import useText from "../../hooks/textLanguage";
import clsx from "clsx";
import { Link } from "react-router-dom";

type Course = {
  id: number;
  title: string;
  completed: boolean;
  score: number;
};

type Courses = {
  courses: Array<Course>;
  title: string;
  color: string;
  bgColor: string;
};

function index(props: Courses) {
  const coursesPageText = useText(
    coursesPageTextEn,
    coursesPageTextEn,
    coursesPageTextEn,
    coursesPageTextEn,
    coursesPageTextEn
  ); //Courses page text

  return (
    <div className="mt-6">
      <h2 className={`${props.color} text-lg`}>{props.title}</h2>
      {props.courses.length > 0 ? (
        <Table className="border-spacing-y-[10px] border-separate sm:mb-2">
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
            {props.courses.map((course: any) => (
              <Table.Tr key={course.id} className="intro-x">
                <Table.Td
                  className={`first:rounded-l-md last:rounded-r-md ${props.bgColor} border-b-0 shadow-[20px_3px_20px_#0000000b] px-2 md:px-3`}
                >
                  <h2
                    className={clsx([
                      "font-medium",

                      { "text-secondary": course.completed },
                    ])}
                  >
                    {course.title}
                  </h2>
                </Table.Td>
                <Table.Td
                  className={`first:rounded-l-md last:rounded-r-md md:w-40 ${props.bgColor} border-b-0 shadow-[20px_3px_20px_#0000000b] px-1 md:px-3`}
                >
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
                        <p className="md:mr-6">
                          {coursesPageText.tableTextCompleted}
                        </p>
                      </>
                    ) : (
                      <p className="md:mr-6">
                        {coursesPageText.tableTextNotCompleted}
                      </p>
                    )}
                  </div>
                </Table.Td>
                <Table.Td
                  className={`first:rounded-l-md last:rounded-r-md md:w-56 ${props.bgColor} border-b-0 shadow-[20px_3px_20px_#0000000b] py-0 px-2 md:px-4 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto`}
                >
                  <div className="flex items-center justify-center text-center">
                    {course.completed ? (
                      <Link
                        className="flex items-center md:mr-1"
                        to="/dashboard/certificates"
                      >
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
      ) : (
        <p className="text-center">{coursesPageText.tableTextNoCourses}</p>
      )}
    </div>
  );
}

export default index;
