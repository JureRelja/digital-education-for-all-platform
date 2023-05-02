import React from "react";
import SelectLanguageModal from "../components/selectLanguageModal/SelectLanguageModal";
import SplitLogin from "../components/splitLogin/SplitLogin";
import LanguageContext from "../store/language-context";
import { useContext } from "react";

function LandingPage() {
  const ctx = useContext(LanguageContext);

  return (
    <>
      {!ctx.changed && <SelectLanguageModal />}
      <SplitLogin />
    </>
  );
}

export default LandingPage;
