import React, { useContext } from "react";
import { motion } from "framer-motion";
import HollandTest from "../../components/HollandTestPage/HollandTest";
import classes from "./TakeHollTestPage.module.css";
import { UserContext } from "../../store/UserProvider";
import HollandTestResults from "../../components/HollandTestPage/HollandTestResults";

function TakeHollTestPage() {
  const ctx = useContext(UserContext);

  return (
    <>
      {ctx.RIASEC.code ? (
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className={classes["holland-test-page"]}
        >
          <HollandTestResults />
        </motion.div>
      ) : (
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className={classes["holland-test-page"]}
        >
          <HollandTest />
        </motion.div>
      )}
    </>
  );
}

export default TakeHollTestPage;
