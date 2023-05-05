import React from "react";
import HollTestInfo from "../../components/HollandTestPage/HollTestInfo";
import { motion } from "framer-motion";

function HollTestInfoPage() {
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
    >
      <HollTestInfo />
    </motion.div>
  );
}

export default HollTestInfoPage;
