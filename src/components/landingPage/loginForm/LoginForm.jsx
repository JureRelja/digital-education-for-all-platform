import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import classes from "./LoginForm.module.css";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { Navigate } from "react-router-dom";
import { database } from "../../../firebase";
import { ref, set, onValue } from "firebase/database";
import { UserContext } from "../../../store/UserProvider";

function LoginForm() {
  const [OIB, setOIB] = useState("");
  const [isOIBValid, setIsOIBValid] = useState(null);
  const ctx = useContext(UserContext);

  const loginHandler = () => {
    if (OIB.length === 11) {
      //Store OIB in database
      authUser();
    } else {
      setIsOIBValid(false);
    }
  };

  const authUser = () => {
    onValue(ref(database, "users/" + OIB), (snapshot) => {
      if (snapshot.exists()) {
        //OIB exists in database
        setIsOIBValid(true);
      } else {
        //OIB doesn't exist in database
        set(ref(database, "users/" + OIB), {
          OIB: OIB,
        }).then(() => {
          setIsOIBValid(true);
        });
      }
    });
    ctx.changeOIB(OIB);
  };

  return (
    <div className={classes.loginForm}>
      <h1>Login Page</h1>
      <TextField
        id="outlined-basic"
        label="Enter your OIB"
        variant="outlined"
        type="number"
        value={OIB}
        onChange={(e) => setOIB(e.target.value)}
      />

      <Button variant="contained" onClick={loginHandler}>
        Login
      </Button>
      {isOIBValid === true && <Navigate to="/holland-test" />}

      {isOIBValid === false && (
        <Alert severity="error">The OIB length must be 11 characters</Alert>
      )}
    </div>
  );
}

export default LoginForm;
