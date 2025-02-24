import React from "react";

const Button = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="custom-button"
    >
      {children}
    </a>
  );
};

export default Button;
