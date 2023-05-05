import React from "react";
import SelectLanguageModal from "../components/landingPage/selectLanguageModal/SelectLanguageModal";
import LoginForm from "../components/landingPage/loginForm/LoginForm";

function LandingPage() {
  return (
    <>
      <SelectLanguageModal />
      <LoginForm />
    </>
  );
}

export default LandingPage;
