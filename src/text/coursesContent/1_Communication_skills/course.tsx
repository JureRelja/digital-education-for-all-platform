import PDFViever from "../../../components/PDFViever";
import PresentationDisplay from "../../../components/PresentationDisplay";
import VideoDisplay from "../../../components/VideoDisplay";
import course1Img from "../../../assets/images/coursesImages/communication_skills.jpg";
import DownloadCertificate from "../../../components/DownloadCertificate";

{
  /*English start*/
}
const course1PDFen = () => {
  return <PDFViever file="../../assets/Course_template.pdf" />;
};

const course1VideoEn = () => {
  return (
    <VideoDisplay
      src="https://www.youtube.com/embed/seADQBgDY8o"
      title="Communication skills"
    />
  );
};

const course1PresenEn = () => {
  return (
    <PresentationDisplay
      src="https://view.genial.ly/60990d4cc9b3ff0d04037c4e"
      title="Communication skills"
    />
  );
};

export const course1ContentEn = {
  title: "Communication skills",
  pdf: course1PDFen,
  video: course1VideoEn,
  pres: course1PresenEn,
  img: <img src={course1Img} className="rounded-lg shadow-md" />,
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu sem tincidunt mauris pulvinar condimentum. Nunc luctus tristique ligula ac accumsan. Maecenas vestibulum, elit sit amet tincidunt scelerisque,`,
  duration: "1h 30min",
  testQuestions: [
    {
      title: "What is a computer?",
      answers: ["CD", "PC", "DVD", "TV"],
      correctAnswer: "PC",
    },
    {
      title: "What is a DVD?",
      answers: ["TV", "DVD", "PC", "CD"],
      correctAnswer: "DVD",
    },
    {
      title: "What is a TV?",
      answers: ["CD", "PC", "DVD", "TV"],
      correctAnswer: "TV",
    },
    {
      title: "What is a CD?",
      answers: ["TV", "PC", "DVD", "CD"],
      correctAnswer: "CD",
    },
    {
      title: "What is a PC?",
      answers: ["DVD", "TV", "CD", "PC"],
      correctAnswer: "PC",
    },
  ],
};
{
  /*English end*/
}

{
  /*Croatia start*/
}

{
  /*Croatia end*/
}
