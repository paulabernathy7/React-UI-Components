import React from "react";
import "./Display.css";

const CalculatorDisplay = props => {
  return (
    <div>
      <button className={props.buttonStyle}>{props.text}</button>
    </div>
  );
};

export default CalculatorDisplay;
