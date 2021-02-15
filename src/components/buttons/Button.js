import React, { useState } from "react";
import "./Button.scss";

export const ButtonText = ({ children, onClick }) => {
  return (
    <Button className="btn__text" onClick={onClick}>
      {children}
    </Button>
  );
};

export const ButtonIconLight = ({ children, onClick }) => {
  return (
    <ButtonIcon className="btn__icon--light" onClick={onClick}>
      {children}
    </ButtonIcon>
  );
};

export const ButtonIcon = ({ children, className, onClick }) => {
  return (
    <Button className={`btn__icon ${className}`} onClick={onClick}>
      {children}
    </Button>
  );
};

const Button = ({ children, className, onClick }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    onClick();

    setClick(true);

    setTimeout(() => {
      setClick(false);
    }, 300);
  };

  return (
    <button className={`btn ${className}`} onClick={handleClick}>
      <span className="btn__content">{children}</span>
      <span className={`btn__up ${click ? "btn--opacity" : null}`}></span>
      <span className={`btn__down ${click ? null : "btn--opacity"}`}></span>
    </button>
  );
};

export default Button;
