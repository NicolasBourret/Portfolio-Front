import React from "react";
import "./Projects.scss";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { ButtonIconLight } from "../../components/buttons/Button";
import { IconSmall } from "../../components/icons/Icon";

import next from "../../images/svg/next.svg";

const Projects = () => {
  return (
    <motion.div
      className="page projects"
      initial={{ translateX: "100%" }}
      animate={{ translateX: "0%" }}
      exit={{ translateX: "100%" }}
    >
      <Link to="/project">
        <ButtonIconLight>
          <IconSmall>
            <img src={next} alt="next" />
          </IconSmall>
        </ButtonIconLight>
      </Link>
    </motion.div>
  );
};

export default Projects;
