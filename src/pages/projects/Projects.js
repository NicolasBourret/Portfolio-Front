import React, { useState, useEffect } from "react";
import "./Projects.scss";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { ButtonIconLight, ButtonIcon } from "../../components/buttons/Button";
import { IconSmall } from "../../components/icons/Icon";

import next from "../../images/svg/next.svg";
import left from "../../images/svg/left.svg";
import github from "../../images/svg/social/github.svg";
import codesandbox from "../../images/svg/social/codesandbox.svg";
import youtube from "../../images/svg/social/youtube.svg";
import codepen from "../../images/svg/social/codepen.svg";
import web from "../../images/svg/social/web.svg";
import plus from "../../images/svg/plus.svg";
import less from "../../images/svg/less-white.svg";

const ProjectsLinks = ({ project }) => {
  return (
    <div className="projects-links">
      {project.links.map((link, index) => {
        let image;

        switch (link.name) {
          case "codepen":
            image = <img src={codepen} alt="codepen" />;
            break;
          case "web":
            image = <img src={web} alt="web" />;
            break;
          case "codesandbox":
            image = <img src={codesandbox} alt="codesandbox" />;
            break;
          case "youtube":
            image = <img src={youtube} alt="youtube" />;
            break;
          default:
            image = <img src={github} alt="github" />;
        }
        return (
          <a href={`${link.src}`} key={index} target="_blank">
            <ButtonIconLight
              onClick={() => {
                return;
              }}
            >
              <IconSmall>{image}</IconSmall>
            </ButtonIconLight>
          </a>
        );
      })}
    </div>
  );
};

const ProjectsItem = ({ project, handleDark }) => {
  const [step2, setStep2] = useState(false);

  const title = project.title.split(" ");

  const handleStep2 = (bool) => {
    setStep2(bool);
  };

  return (
    <article className="projects-item">
      <div className={`projects-item__figure`}>
        <div
          className={`projects-item__image ${
            step2 ? null : "projects-item__image--scale"
          }`}
          style={{ backgroundImage: `url(${project.image})` }}
        ></div>
        <div
          className={`projects-item__background ${
            step2 ? null : "projects-item__background--scale"
          }`}
        ></div>
      </div>
      <div
        className={`projects-item__infos ${
          step2 ? null : "projects-item__infos--translate"
        }`}
      >
        <h2>
          {title.map((word, index) => {
            if (index % 2 !== 0) {
              return <span key={index}>{word}</span>;
            }
            return word;
          })}
        </h2>
        <ProjectsLinks project={project} />
      </div>
      <div className="projects-item__nav">
        <span
          className={`projects-item__btn ${
            step2 ? "projects-item__btn--opacity" : null
          }`}
        >
          <ButtonIconLight
            onClick={() => {
              handleStep2(true);
            }}
          >
            <IconSmall>
              <img src={plus} alt="plus" />
            </IconSmall>
          </ButtonIconLight>
        </span>
        <div
          className={`projects-item__step-2 projects-item__btn ${
            step2 ? null : "projects-item__btn--opacity"
          }`}
        >
          <ButtonIcon
            onClick={() => {
              handleStep2(false);
            }}
          >
            <IconSmall>
              <img src={less} alt="less" />
            </IconSmall>
          </ButtonIcon>
          <Link to={`/project/${project._id}`}>
            <ButtonIconLight onClick={() => handleDark(false)}>
              <IconSmall>
                <img src={next} alt="next" />
              </IconSmall>
            </ButtonIconLight>
          </Link>
        </div>
      </div>
    </article>
  );
};

const PorjectList = ({ projects, handleDark }) => {
  return (
    <motion.div
      className="projects-list"
      initial={{ translateX: "-100%" }}
      animate={{ translateX: "0%" }}
      exit={{ translatex: "-100%" }}
    >
      {projects.map((project) => {
        return (
          <ProjectsItem
            key={project._id}
            handleDark={handleDark}
            project={project}
          />
        );
      })}
    </motion.div>
  );
};

const Projects = ({ handleDark }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://stark-reef-97602.herokuapp.com/projects")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProjects(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <motion.section
        className="page projects"
        initial={{ translateX: "100%" }}
        animate={{ translateX: "0%" }}
        exit={{ translateX: "100%" }}
      >
        <motion.div
          className="projects__header"
          initial={{ translateX: "-100%" }}
          animate={{ translateX: "0%" }}
          exit={{ translatex: "-100%" }}
        >
          <Link to="/">
            <ButtonIconLight onClick={() => handleDark(false)}>
              <IconSmall>
                <img src={left} alt="return" />
              </IconSmall>
            </ButtonIconLight>
          </Link>
          <h1>
            <span>Mes</span> Projets
          </h1>
        </motion.div>
        <PorjectList projects={projects} handleDark={handleDark} />
      </motion.section>
    );
  }
};

export default Projects;
