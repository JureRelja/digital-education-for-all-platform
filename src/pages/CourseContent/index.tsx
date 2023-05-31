import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { coursesEng, coursesHr } from "../../text/courses/Courses";
import useText from "../../hooks/textLanguage";
import Heading from "../../components/Heading";
import PageContainer from "../../components/PageContainer";

function index() {
  const navigate = useNavigate();
  const { courseID } = useParams();

  const courseLanguage = useText(
    coursesEng,
    coursesHr,
    coursesEng,
    coursesEng,
    coursesEng
  );

  const course = courseLanguage.find((course: any) => course.id == courseID);

  return (
    <PageContainer>
      <Heading>{course.title}</Heading>
      <h2>{course.id}</h2>
    </PageContainer>
  );
}

export default index;
