import React from "react";
import "./Footer.scss";

import { motion } from "framer-motion";

import { IconNormal } from "../icons/Icon";
import { ButtonIcon } from "../buttons/Button";

import github from "../../images/svg/social/github.svg";
import githubWhite from "../../images/svg/social/github-white.svg";
import codepen from "../../images/svg/social/codepen.svg";
import codepenWhite from "../../images/svg/social/codepen-white.svg";
import codesandbox from "../../images/svg/social/codesandbox.svg";
import codesandboxWhite from "../../images/svg/social/codesandbox-white.svg";
import mail from "../../images/svg/social/mail.svg";
import mailWhite from "../../images/svg/social/mail-white.svg";

const Footer = ({ dark }) => {
  return (
    <motion.footer
      className="footer"
      initial={{ translateY: "100%" }}
      animate={{ translateY: "0%" }}
      exit={{ translateY: "100%" }}
    >
      <ButtonIcon>
        <IconNormal>
          <span className="footer__items">
            <img
              src={github}
              alt="github"
              className={`footer__item ${
                dark ? "footer__item--opacity" : null
              }`}
            />
            <img
              src={githubWhite}
              alt="github"
              className={`footer__item ${
                dark ? null : "footer__item--opacity"
              }`}
            />
          </span>
        </IconNormal>
      </ButtonIcon>
      <ButtonIcon>
        <IconNormal>
          <span className="footer__items">
            <img
              src={codepen}
              alt="codepen"
              className={`footer__item ${
                dark ? "footer__item--opacity" : null
              }`}
            />
            <img
              src={codepenWhite}
              alt="codepen"
              className={`footer__item ${
                dark ? null : "footer__item--opacity"
              }`}
            />
          </span>
        </IconNormal>
      </ButtonIcon>
      <ButtonIcon>
        <IconNormal>
          <span className="footer__items">
            <img
              src={codesandbox}
              alt="codesandbox"
              className={`footer__item ${
                dark ? "footer__item--opacity" : null
              }`}
            />
            <img
              src={codesandboxWhite}
              alt="codesandbox"
              className={`footer__item ${
                dark ? null : "footer__item--opacity"
              }`}
            />
          </span>
        </IconNormal>
      </ButtonIcon>
      <ButtonIcon>
        <IconNormal>
          <span className="footer__items">
            <img
              src={mail}
              alt="mail"
              className={`footer__item ${
                dark ? "footer__item--opacity" : null
              }`}
            />
            <img
              src={mailWhite}
              alt="mail"
              className={`footer__item ${
                dark ? null : "footer__item--opacity"
              }`}
            />
          </span>
        </IconNormal>
      </ButtonIcon>
    </motion.footer>
  );
};

export default Footer;
