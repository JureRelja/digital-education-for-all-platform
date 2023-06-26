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
      title:
        "Which of the following levels of meaning is NOT mentioned in Schulz von Thun's four ears model?",
      answers: [
        "self-disclosure",
        "factual information",
        "emotions",
        "expression of the relationship",
      ],
      correctAnswer: "emotions",
    },
    {
      title:
        "You and your friends are choosing a film to watch together in the evening. You're not too keen on their suggestions. How could you show that in an assertive communication manner?",
      answers: [
        "I'm not really in the mood for the films you've suggested so far. I'd rather watch X.",
        "Either look at A or look at B, but if you argue any longer, I'll leave.",
        "We're always looking at something I don't want; you're deliberately not listening to me.",
        "Everything you suggest is nonsense. Let's watch this movie and be done with it.",
      ],
      correctAnswer:
        "I'm not really in the mood for the films you've suggested so far. I'd rather watch X.",
    },
    {
      title:
        "Your colleague repeatedly borrows your coffee cup, even though you have asked her not to do so several times. According to what you know about assertive communication and communication stoppers, which of the following responses would be most appropriate?",
      answers: [
        "You know, we shouldn't borrow other people's stuff without permission.",
        "I see you borrowed my mug, even though I already asked you not to. I'm not comfortable with it. Please don't use it.",
        "You can't be serious, you've got my mug again? How many times do I have to tell you not to borrow it?",
        "Give me back the cup right now, and don't let it happen again!",
      ],
      correctAnswer:
        "I see you borrowed my mug, even though I already asked you not to. I'm not comfortable with it. Please don't use it.",
    },
    {
      title:
        "In terms of assertive communication, what should we NOT do when arguing with a partner?",
      answers: [
        "Ask him/her if we can talk about the matter later, in peace.",
        "Express your wishes and needs.",
        "Use 'I-statements'.",
        "Downplay his/her feelings in order to get to the rational core of the problem.",
      ],
      correctAnswer:
        "Downplay his/her feelings in order to get to the rational core of the problem.",
    },
    {
      title: "Select a close-ended question from the following options:",
      answers: [
        "What are your ideas about your financial evaluation?",
        "Tell me, what is your previous work experience?",
        "How many jobs have you held?",
        "Have you ever worked in a team?",
      ],
      correctAnswer: "Have you ever worked in a team?",
    },
    {
      title:
        "Which of the following statements is NOT an example of manipulation?",
      answers: [
        "I'm sad because I didn't get the job I wanted.",
        "How can you tell me that when you know how much I cared?",
        "If it weren't for me, no one would even notice my colleague's performance.",
        "Either you do as I say or we're done.",
      ],
      correctAnswer: "I'm sad because I didn't get the job I wanted.",
    },
    {
      title:
        "Your colleague promised you 14 days ago to deliver the documents he was supposed to prepare. When you repeatedly ask him for them, he says he was too busy, that he forgot, that he had to solve problems at home, and that it would be better if you prepared the documents yourself. What would an appropriate response look like?",
      answers: [
        "You will leave your colleague alone and prepare the documents yourself.",
        "You remind your colleague that it was his task to prepare the documents and ask him how he proposes to resolve the situation.",
        "You tell your colleague that if he doesn't deliver the documents by the next day, you will go to the manager.",
        "You will point out to your colleague that the preparation of documents is a responsible job and that next time he or she might not be given such a responsibility.",
      ],
      correctAnswer:
        "You remind your colleague that it was his task to prepare the documents and ask him how he proposes to resolve the situation.",
    },
    {
      title:
        "The client asks you for an appointment outside of your working hours, and at a time when you wanted to do something else. What would an appropriate (assertive) response look like?",
      answers: [
        "I would love to, but it's outside my working hours and I have other plans there...",
        "Unfortunately, this date is not possible, you will have to organize your time better and come during office hours.",
        "Can't you go to another colleague? I've had a number of requests like this and I don't know what to do first...",
        "Unfortunately I can't do it at this time. Would it be convenient for you at [suggest date and time]?",
      ],
      correctAnswer:
        "Unfortunately I can't do it at this time. Would it be convenient for you at [suggest date and time]?",
    },
    {
      title:
        "You and your spouse are cooking dinner together and you see him/her chopping mushrooms that you don't like in your food. What is the best way to express that you don't want mushrooms in your food?",
      answers: [
        "You really want to put mushrooms in it?",
        "Mushrooms might not be the best idea...",
        "You know there are people who don't like mushrooms?",
        "Please don't put the mushrooms in, I don't like them.",
      ],
      correctAnswer: "Please don't put the mushrooms in, I don't like them.",
    },
    {
      title:
        "Which of the following statements does NOT apply to giving feedback?",
      answers: [
        "It is appropriate to use 'I-statements'.",
        "We are describing a behavior, not a person.",
        "Feedback should always be positive.",
        "Timely feedback can have a greater effect than feedback given late.",
      ],
      correctAnswer: "Feedback should always be positive.",
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
