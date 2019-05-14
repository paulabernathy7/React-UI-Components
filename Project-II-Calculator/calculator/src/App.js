import React from "react";
import "./App.css";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay displayStyle ="displayStyle"text="0" />
      <div className="first-row">
      <ActionButton actionStyle = "actionStyle" text="Clear" />
      <NumberButton buttonStyle ="buttonStyle" text="/" />
      </div>
      <div className="sec-row">
      <NumberButton buttonStyle ="num-btn"text="7" />
      <NumberButton buttonStyle ="num-btn" text="8" />
      <NumberButton buttonStyle ="num-btn"text="9" />
      <NumberButton buttonStyle ="buttonStyle" text="x" />
      </div>
      <div className="third-row">
      <NumberButton buttonStyle ="num-btn" text="4" />
      <NumberButton buttonStyle ="num-btn" text="5" />
      <NumberButton buttonStyle ="num-btn" text="6" />
      <NumberButton buttonStyle ="buttonStyle" text="-" />
      </div>
      <div className="fourth-row">
      <NumberButton buttonStyle ="num-btn" text="1" />
      <NumberButton buttonStyle ="num-btn" text="2" />
      <NumberButton buttonStyle ="num-btn" text="3" />
      <NumberButton buttonStyle ="buttonStyle" text="+" />
        </div>
        <div className="fifth-row">
      <ActionButton actionStyle = "actionStyle" text="0" />
      <NumberButton buttonStyle ="buttonStyle" text="=" />
      </div>

      {/* <NumberButton buttonStyle="buttonStyle" text="1"/> */}
    </div>
  );
};

export default App;
