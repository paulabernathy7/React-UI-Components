import React from "react";
import "./Display.css";

const CalculatorDisplay = props => {
  return (
    <div>
      <button className={props.displayStyle}>{props.text}</button>
    </div>
  );
};

export default CalculatorDisplay;
