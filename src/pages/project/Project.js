import React, { useState, useEffect } from "react";
import "./Project.scss";

import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { ButtonIconLight, ButtonIcon } from "../../components/buttons/Button";
import { IconSmall } from "../../components/icons/Icon";

import right from "../../images/svg/right.svg";
import github from "../../images/svg/social/github.svg";
import codesandbox from "../../images/svg/social/codesandbox.svg";
import youtube from "../../images/svg/social/youtube.svg";
import codepen from "../../images/svg/social/codepen.svg";
import web from "../../images/svg/social/web.svg";

const ProjectSkills = ({ project }) => {
  return (
    <div className="project-skills">
      {project.skills.map((skill, index) => {
        return <p key={index}>{skill}</p>;
      })}
    </div>
  );
};

const ProjectLinks = ({ project }) => {
  return (
    <div className="project-links">
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
            <ButtonIcon
              onClick={() => {
                return;
              }}
            >
              <IconSmall>{image}</IconSmall>
            </ButtonIcon>
          </a>
        );
      })}
    </div>
  );
};

const Project = ({ handleDark }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [project, setProject] = useState({
    title: "",
    skills: [],
    links: [],
    text: "",
  });
  let { id } = useParams();

  useEffect(() => {
    fetch(`https://stark-reef-97602.herokuapp.com/project/${id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProject({
            ...result,
          });
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [id]);

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    const title = project.title.split(" ");

    return (
      <motion.div
        className="page project"
        initial={{ translateY: "100%" }}
        animate={{ translateY: "0%" }}
        exit={{ translateY: "120%" }}
      >
        <div
          className="project__image"
          style={{ backgroundImage: `url(${project.image})` }}
        ></div>
        <div className="project__text">
          <div className="project__nav">
            <h1>
              {title.map((word, index) => {
                if (index % 2 !== 0) {
                  return <span key={index}>{word}</span>;
                }
                return word;
              })}
            </h1>
            <Link to="/projects">
              <ButtonIcon
                onClick={() => {
                  handleDark(true);
                }}
              >
                <IconSmall>
                  <img src={right} alt="return" />
                </IconSmall>
              </ButtonIcon>
            </Link>
          </div>
          <ProjectLinks project={project} />
          <ProjectSkills project={project} />
          <div className="project__description">
            <p>{project.text}</p>
          </div>
        </div>
      </motion.div>
    );
  }
};

export default Project;
