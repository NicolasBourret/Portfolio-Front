import React from "react";
import "./Home.scss";

import { motion } from "framer-motion";

import ThreeElement from "../../components/three-element/ThreeElement";

const Container = () => {
  return (
    <motion.div
      className="container"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
    >
      <span className="container__up"></span>
      <span className="container__down"></span>
    </motion.div>
  );
};

const Home = () => {
  return (
    <motion.section
      className="page home"
      initial={{ translateY: "-100%" }}
      animate={{ translateY: "0%" }}
      exit={{ translateY: "-120%" }}
    >
      <motion.h2
        initial={{ translateX: "100%" }}
        animate={{ translateX: "0%" }}
        exit={{ translatex: "100%" }}
      >
        Nicolas <span>Bourret</span>
      </motion.h2>
      <div className="home__figure">
        <Container />
        <ThreeElement />
      </div>
      <motion.h1
        initial={{ translateX: "-100%" }}
        animate={{ translateX: "0%" }}
        exit={{ translatex: "-100%" }}
      >
        Développeur <span>Web</span>
      </motion.h1>
    </motion.section>
  );
};

export default Home;
