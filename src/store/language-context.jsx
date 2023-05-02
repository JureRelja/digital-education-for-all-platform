import React, { createContext } from "react";

const LanguageContext = createContext({
  language: "",
  setLanguage: () => {},
});

export default LanguageContext;
