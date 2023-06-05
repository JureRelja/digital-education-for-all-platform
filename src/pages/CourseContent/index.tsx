import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { coursesEng, coursesHr } from "../../text/courses/Courses";
import useText from "../../hooks/textLanguage";
import Heading from "../../components/Heading";
import PageContainer from "../../components/PageContainer";
import Modal from "../../components/CourseModal";
import { coursePageTextEn } from "../../text/coursesContent/coursePageText/text";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";

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

  const coursePageText = useText(
    coursePageTextEn,
    coursePageTextEn,
    coursePageTextEn,
    coursePageTextEn,
    coursePageTextEn
  );

  const course = courseLanguage.find((course: any) => course.id == courseID);

  return (
    <PageContainer>
      <Heading>{course.title}</Heading>
      <div className="flex gap-5 flex-col md:flex-row justify-center items-center">
        <div>{course.content.img}</div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards pb-1 border-b-slate-300 border-b-[1px] mb-4 w-full text-center">
            {coursePageText.about}
          </h2>
          <p className="text-left text-lg">{course.content.text}</p>
          <p className="text-left text-lg">
            <b>{coursePageText.duration}</b>
            {course.content.duration}
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl text-bold opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards pb-1 border-b-slate-300 border-b-[1px] mb-4 w-full text-center">
          {coursePageText.resources}
        </h2>
        <div className="flex gap-4 md:flex-row flex-col">
          <Modal
            overlayContent={course.content.pdf()}
            resourceType={coursePageText.pdf}
            text={coursePageText.pdf}
            icon="FileText"
            iconColor="text-primary"
            position="upper-right"
          ></Modal>
          <Modal
            overlayContent={course.content.video()}
            resourceType={coursePageText.video}
            text={coursePageText.video}
            icon="Youtube"
            iconColor="text-pending"
            position="upper-right"
          ></Modal>
          <Modal
            overlayContent={course.content.pres()}
            resourceType={coursePageText.pres}
            text={coursePageText.pres}
            icon="Monitor"
            iconColor="text-warning"
            position="upper-left"
          ></Modal>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <h2 className="text-xl text-bold opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards pb-1 border-b-slate-300 border-b-[1px] mb-4 w-full text-center">
          {coursePageText.finished}
        </h2>
        <Button
          variant="success"
          className="mb-2 mr-2 text-md text-white"
          onClick={() => navigate("#")}
        >
          Take the test
          <Lucide icon="Edit" className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </PageContainer>
  );
}

export default index;
