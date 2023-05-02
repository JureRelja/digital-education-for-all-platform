import React from "react";
import classes from "./SelectLanguageModal.module.css";
import SelectLanguage from "./SelectLanguage";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

function SelectLanguageModal() {
  return (
    <Modal>
      <div className={classes.container}>
        <h1>Welcome</h1>
        <SelectLanguage />
        <Button text={"Continue"} />
      </div>
    </Modal>
  );
}

export default SelectLanguageModal;
