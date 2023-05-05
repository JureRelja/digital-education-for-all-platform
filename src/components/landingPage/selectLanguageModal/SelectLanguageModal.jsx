import React, { useState } from "react";
import classes from "./SelectLanguageModal.module.css";
import SelectLanguage from "./SelectLanguage";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";

function SelectLanguageModal() {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <div className={classes.container}>
          <h1>Welcome</h1>
          <SelectLanguage />
          <Button variant="contained" onClick={handleClose}>
            Next
          </Button>
        </div>
      </Fade>
    </Modal>
  );
}

export default SelectLanguageModal;
