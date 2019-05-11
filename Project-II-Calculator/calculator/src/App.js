import React from "react";
import "./App.css";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

const App = () => {
  return (
    <div>
      <CalculatorDisplay text="0" />
      <ActionButton text="Clear" />
      <NumberButton text="/" />
      <NumberButton text="7" />
      <NumberButton text="8" />
      <NumberButton text="9" />
      <NumberButton text="x" />
      <NumberButton text="4" />
      <NumberButton text="5" />
      <NumberButton text="6" />
      <NumberButton text="-" />
      <NumberButton text="1" />
      <NumberButton text="2" />
      <NumberButton text="3" />
      <NumberButton text="+" />
      <ActionButton text="0" />
      <NumberButton text="=" />

      {/* <NumberButton buttonStyle="buttonStyle" text="1"/> */}
    </div>
  );
};

export default App;
