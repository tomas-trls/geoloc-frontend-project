import React from "react";
import "./Button.scss";

const Button = ({ buttonType }) => {
  return (
    <button className="button" type={buttonType}>
      <span className="button-front">CONTINUE</span>
    </button>
  );
};

export default Button;
