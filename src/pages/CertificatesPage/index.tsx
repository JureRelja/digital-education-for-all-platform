import Heading from "../../components/Heading";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import { useNavigate } from "react-router";
import useText from "../../hooks/textLanguage";
import { CertificatesPageTextEn } from "../../text/certificates/text";
import PageContainer from "../../components/PageContainer";
import { coursesEn } from "../../text/courses/Courses";
import { useSelector } from "react-redux";
import Table from "../../base-components/Table";
import clsx from "clsx";
import { Link } from "react-router-dom";

function index() {
  const navigate = useNavigate();

  const CertificatesPageText = useText(
    CertificatesPageTextEn,
    CertificatesPageTextEn,
    CertificatesPageTextEn,
    CertificatesPageTextEn,
    CertificatesPageTextEn
  );

  const coursesOrder = useSelector((state: any) => state.user.coursesOrder); //Courses order

  const courses = useText(
    coursesEn,
    coursesEn,
    coursesEn,
    coursesEn,
    coursesEn
  ); //Courses

  const orderedCourses = coursesOrder.map((order: any) => {
    const newOrdCourse = courses.find((course: any) => course.id == order.id);
    return { ...newOrdCourse, completed: order.completed };
  }); //Ordered courses

  const completedCourses = orderedCourses.filter(
    (course: any) => course.completed
  ); //Completed courses

  return (
    <PageContainer>
      <Heading>{CertificatesPageText.title}</Heading>
      {completedCourses.length > 0 ? (
        <>
          <p className="text-md font-normal text-center opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards ">
            {CertificatesPageText.certificatesParagraph}
          </p>

          <div className="overflow-auto intro-y lg:overflow-visible sm:mt-0 w-full ">
            <Table className="border-spacing-y-[10px] border-separate sm:mt-2">
              <Table.Thead>
                <Table.Tr>
                  <Table.Th className="border-b-0 whitespace-nowrap">
                    {CertificatesPageText.tableCourseTitle}
                  </Table.Th>
                  <Table.Th className="border-b-0 whitespace-nowrap">
                    {CertificatesPageText.tableCertificate}
                  </Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {completedCourses.map((course: any) => (
                  <Table.Tr key={course.id} className="intro-x">
                    <Table.Td className="first:rounded-l-md text-white last:rounded-r-md bg-success border-b-0 shadow-[20px_3px_20px_#0000000b] px-2 md:px-3">
                      <h2 className={clsx(["font-medium"])}>{course.title}</h2>
                    </Table.Td>
                    {/* <Table.Td className="first:rounded-l-md last:rounded-r-md md:w-40 bg-white border-b-0 shadow-[20px_3px_20px_#0000000b] px-1 md:px-3">
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
                            <p>{CertificatesPageText.tableTextCompleted}</p>
                          </>
                        ) : (
                          <p className="md:mr-6">
                            {CertificatesPageText.tableTextNotCompleted}
                          </p>
                        )}
                      </div>
                    </Table.Td> */}
                    <Table.Td className="first:rounded-l-md last:rounded-r-md text-white md:w-56 bg-success border-b-0 shadow-[20px_3px_20px_#0000000b] py-0 px-2 md:px-4 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto">
                      <div className="flex items-center justify-center text-center">
                        <Link
                          className="flex items-center md:mr-3"
                          to="/dashboard/certificates"
                        >
                          <Lucide icon="Archive" className="w-4 h-4 md:mr-1" />
                          {CertificatesPageText.getCertificateBtnText}
                        </Link>
                      </div>
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-5 text-center">
            <p className="text-md font-normal text-center">
              {CertificatesPageText.noCertificatesText}
            </p>
          </div>
          <div className="flex justify-center">
            <Button
              variant="primary"
              className="mb-2 mr-2 text-md"
              onClick={() => navigate("/dashboard/courses")}
            >
              {CertificatesPageText.seeCoursesButtonText}{" "}
              <Lucide icon="FileText" className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </>
      )}
    </PageContainer>
  );
}

export default index;
