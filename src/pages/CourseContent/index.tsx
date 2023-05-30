import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { coursesEng, coursesHr } from "../../text/courses/Courses";
import useText from "../../hooks/textLanguage";
import PDFViever from "../../components/PDFViever";

function index() {
  const navigate = useNavigate();
  const { courseID } = useParams();

  const courseLanguage = useText(
    coursesEng,
    coursesEng,
    coursesEng,
    coursesEng,
    coursesEng
  );

  const course = courseLanguage.find((course: any) => course.id == courseID);

  return (
    <div className="opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards ">
      <h1>{course.title}</h1>
      <PDFViever file={course.content.pdf} />
    </div>
  );
}

export default index;
