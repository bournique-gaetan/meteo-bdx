import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonPress = (value) => {
    if (value === "=") {
      calculateResult();
    } else if (value === "C") {
      clearInput();
    } else {
      setInput(input + value);
    }
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="calculator">
      <input type="text" className="calculator-screen" value={input} disabled />
      <input
        type="text"
        className="calculator-screen"
        value={result}
        disabled
      />
      <div className="calculator-grid">
        <button
          className="calculator-button"
          onClick={() => handleButtonPress("7")}
        >
          7
        </button>
        <button
          className="calculator-button"
          onClick={() => handleButtonPress("8")}
        >
          8
        </button>
        <button
          className="calculator-button"
          onClick={() => handleButtonPress("9")}
        >
          9
        </button>
        <button
          className="calculator-button"
          onClick={() => handleButtonPress("+")}
        >
          +
        </button>
        <button
          className="calculator-button"
          onClick={() => handleButtonPress("4")}
        >
          4
        </button>
        <button
          className="calculator-button"
          onClick={() => handleButtonPress("5")}
        >
          5
        </button>
        <button
          className="calculator-button"
          onClick={() => handleButtonPress("6")}
        >
          6
        </button>
        <button
          className="calculator-button"
          onClick={() => handleButtonPress("-")}
        >
          -
        </button>
        <button
          className="calculator-button"
          onClick={() => handleButtonPress("1")}
        >
          1
        </button>
        <button
          className="calculator-button"
          onClick={() => handleButtonPress("2")}
        >
          2
        </button>
        <button
          className="calculator-button"
          onClick={() => handleButtonPress("3")}
        >
          3
        </button>
        <button
          className="calculator-button"
          onClick={() => handleButtonPress("*")}
        >
          *
        </button>
        <button
          className="calculator-button"
          onClick={() => handleButtonPress("C")}
        >
          C
        </button>
        <button
          className="calculator-button"
          onClick={() => handleButtonPress("0")}
        >
          0
        </button>
        <button
          className="calculator-button"
          onClick={() => handleButtonPress("=")}
        >
          =
        </button>
        <button
          className="calculator-button"
          onClick={() => handleButtonPress("/")}
        >
          /
        </button>
      </div>
    </div>
  );
};

export default Calculator;
