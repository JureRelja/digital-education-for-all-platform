import { useContext, useState } from "react";
import LanguageContext from "./language-context";

function LanguageProvider(props) {
  const [language, setLanguage] = useState("en");
  const [changed, setChanged] = useState(false);

  const changeLanguage = (language) => {
    setLanguage(language);
  };

  const changedHandler = () => {
    setChanged(true);
  };

  const context = {
    language,
    changeLanguage,
    changed,
    changedHandler,
  };

  return (
    <LanguageContext.Provider value={context}>
      {props.children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
