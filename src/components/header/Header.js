import React, { useState } from "react";
import "./Header.scss";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { IconNormal } from "../icons/Icon";
import { ButtonText, ButtonIcon } from "../buttons/Button";

import logo from "../../images/svg/logo.svg";
import logoWhite from "../../images/svg/logo-white.svg";
import hamburger from "../../images/svg/hamburger.svg";
import hamburgerWhite from "../../images/svg/hamburger-white.svg";
import close from "../../images/svg/close.svg";
import closeWhite from "../../images/svg/close-white.svg";

const Nav = ({ dark, handleDark, openNav }) => {
  return (
    <nav className={`nav ${openNav ? null : "nav--translate"}`}>
      <Link to="/projects">
        <ButtonText onClick={() => handleDark(true)}>
          <span className="nav__items">
            <span
              className={`nav__item nav__item--dark ${
                dark ? "nav__item--opacity" : null
              }`}
            >
              Tous mes projets
            </span>
            <span
              className={`nav__item nav__item--light ${
                dark ? null : "nav__item--opacity"
              }`}
            >
              Tous mes projets
            </span>
          </span>
        </ButtonText>
      </Link>
    </nav>
  );
};

const NavBar = ({ dark, handleDark, openNav, handleOpenNav }) => {
  return (
    <div className="navbar">
      <Link to="/">
        <ButtonIcon onClick={() => handleDark(false)}>
          <IconNormal>
            <span className="navbar__items">
              <img
                src={logo}
                alt="logo"
                className={`navbar__item ${
                  dark ? "navbar__item--opacity" : null
                }`}
              />
              <img
                src={logoWhite}
                alt="logo"
                className={`navbar__item ${
                  dark ? null : "navbar__item--opacity"
                }`}
              />
            </span>
          </IconNormal>
        </ButtonIcon>
      </Link>
      <div
        className={`navbar__open-close ${
          openNav ? "navbar__open-close--rotate" : null
        }`}
      >
        <span
          className={`navbar__open ${openNav ? "navbar__open--opacity" : null}`}
        >
          <ButtonIcon onClick={() => handleOpenNav(true)}>
            <IconNormal>
              <span className="navbar__items">
                <img
                  src={hamburger}
                  alt="open"
                  className={`navbar__item ${
                    dark ? "navbar__item--opacity" : null
                  }`}
                />
                <img
                  src={hamburgerWhite}
                  alt="open"
                  className={`navbar__item ${
                    dark ? null : "navbar__item--opacity"
                  }`}
                />
              </span>
            </IconNormal>
          </ButtonIcon>
        </span>
        <span
          className={`navbar__close ${
            openNav ? null : "navbar__open--opacity"
          }`}
        >
          <ButtonIcon onClick={() => handleOpenNav(false)}>
            <IconNormal>
              <span className="navbar__items">
                <img
                  src={close}
                  alt="close"
                  className={`navbar__item ${
                    dark ? "navbar__item--opacity" : null
                  }`}
                />
                <img
                  src={closeWhite}
                  alt="close"
                  className={`navbar__item ${
                    dark ? null : "navbar__item--opacity"
                  }`}
                />
              </span>
            </IconNormal>
          </ButtonIcon>
        </span>
      </div>
    </div>
  );
};

const Header = ({ dark, handleDark }) => {
  const [openNav, setOpenNav] = useState(false);

  const handleOpenNav = (bool) => {
    setOpenNav(bool);
  };

  return (
    <motion.header
      className="header"
      initial={{ translateY: "-100%" }}
      animate={{ translateY: "0%" }}
      exit={{ translateY: "-100%" }}
    >
      <NavBar
        dark={dark}
        handleDark={handleDark}
        openNav={openNav}
        handleOpenNav={handleOpenNav}
      />
      <Nav dark={dark} handleDark={handleDark} openNav={openNav} />
    </motion.header>
  );
};

export default Header;
