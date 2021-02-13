import React from "react";
import "./Project.scss";

import { motion } from "framer-motion";

const Project = () => {
  return (
    <motion.div
      className="page project"
      initial={{ translateY: "100%" }}
      animate={{ translateY: "0%" }}
      exit={{ translateY: "120%" }}
    ></motion.div>
  );
};

export default Project;
