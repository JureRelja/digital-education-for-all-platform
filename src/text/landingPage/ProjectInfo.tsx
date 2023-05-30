import { useSelector } from "react-redux";

export const projectInfoEng = {
  title:
    "Digital Education for All - Development of Technology Enhanced Learning for Unemployed Persons",
  projectBeneficiaryBold: "Project Beneficiary:",
  projectBeficiaryText: "„ŽENA“, Drniš, Republic of Croatia",
  partnersBold: "Partners:",
  partnersText: [
    "CISOK, Hrvatski zavod za zapošljavanje - Područni ured Šibenik, Šibenik, Republic of Croatia",
    "Eurokreator, Krakow, Poland",
    "Univerzita Palackeho v Olomouci, Olomouc, Chech Republic",
    "Ljudska univerza zavod za kulturo in izobrazevanje Slovenska Bistrica, Slovenska bistrica, Republic of Slovenia",
  ],
  projectDurationBold: "Project duration:",
  projectDurationText: "01.11.2021. – 31.10.2023.",
  projectAim: `The aim of this project is to include the long-term unemployed people (with an emphasis on women) in the processes of online education and / or hybrid teaching through the development of an innovative digital tool that will enable them to acquire the competencies needed in the labor market.`,
  projectResultsBold: "Results:",
  projectResultsText: [
    "Developed web application with online courses for the education of the unemployed",
    "Developed manual that will contain instructions on how to use the application, but will also inform the target group about the benefits of online education (digital manual)",
    "Designed and developed 10 online courses that will be constructed for the long-term unemployed and will be able to adapt to specific groups",
  ],
};

const ProjectInfoText = () => {
  const language = useSelector((state: any) => state.language);

  let text = projectInfoEng;

  return text;
};
