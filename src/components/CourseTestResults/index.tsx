import useText from "../../hooks/textLanguage";
import { courseTestTextEn } from "../../text/courseTest/text";
import Button from "../../base-components/Button";
import { useNavigate } from "react-router";
import Lucide from "../../base-components/Lucide";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { database } from "../../firebase";
import { ref, update } from "firebase/database";
import { changeCourseStatus } from "../../stores/userSlice";

type CourseTestResults = {
  points: number;
  courseID?: string;
};

function index(props: CourseTestResults) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const courseID = parseInt(props.courseID!);

  const userCode = useSelector((state: any) => state.user.userCode);
  const coursesOrder = useSelector((state: any) => state.user.coursesOrder);

  const resultsText = useText(
    courseTestTextEn,
    courseTestTextEn,
    courseTestTextEn,
    courseTestTextEn,
    courseTestTextEn
  );

  const { points } = props;

  useEffect(() => {
    // If the user has 3 or more points, the course is marked as completed
    if (points >= 3) {
      const courseIndex = coursesOrder.findIndex(
        (course: any) => course.id === courseID
      );

      update(ref(database, `users/${userCode}/coursesOrder/${courseIndex}`), {
        completed: true,
      }); //Updating the course status in the database

      dispatch(
        changeCourseStatus({ courseIndex: courseIndex, completed: true }) //Updating the course status in the store
      );
    }
  }, []);

  return (
    <>
      <h2 className="text-xl">
        {resultsText.resultsHeading} <b>{points}/5</b>
      </h2>

      {points >= 3 ? (
        <>
          <p className="text-md font-normal text-center">
            {resultsText.resultsSuccessMsg}
          </p>
          <Button
            variant="primary"
            className="mb-2 mr-2 text-md"
            onClick={() => navigate("/dashboard/certificates")}
          >
            {resultsText.resultsSuccessBtn}{" "}
            <Lucide icon="Archive" className="w-4 h-4 ml-2" />
          </Button>
        </>
      ) : (
        <>
          <p className="text-md font-normal text-center">
            {resultsText.resultsFailureMsg}
          </p>
          <Button
            variant="primary"
            className="mb-2 mr-2 text-md"
            onClick={() => navigate(`/dashboard/courses/${props.courseID}`)}
          >
            {resultsText.resultsFailureBtn}{" "}
            <Lucide icon="FileText" className="w-4 h-4 ml-2" />
          </Button>
        </>
      )}
    </>
  );
}

export default index;
