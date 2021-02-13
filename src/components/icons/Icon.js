import React from "react";
import "./Icon.scss";

export const IconSmall = ({ children }) => {
  return <Icon className="icon--small">{children}</Icon>;
};

export const IconNormal = ({ children }) => {
  return <Icon className="icon--normal">{children}</Icon>;
};

const Icon = ({ children, className }) => {
  return <span className={`icon ${className}`}>{children}</span>;
};

export default Icon;
