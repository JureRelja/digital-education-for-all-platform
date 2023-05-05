import { useState } from "react";
import LanguageContext from "./language-context";

function LanguageProvider(props) {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (language) => {
    setLanguage(language);
  };

  const context = {
    language,
    changeLanguage,
  };

  return (
    <LanguageContext.Provider value={context}>
      {props.children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
