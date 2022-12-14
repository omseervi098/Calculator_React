import React, { useState } from "react";
import Input from "./components/Input";
import Buttons from "./components/Buttons";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [input, setInput] = useState(""); //State for input
  const [result, setResult] = useState(""); //State for resultdisplay
  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleInput = (e) => {
    let val = e.target.innerText;
    if (input === "Invalid Input") {
      setInput(val);
      return;
    }
    if (result !== "") {
      setInput(result + val);
      setResult("");
    } else setInput(input + val);
  };
  const getResults = () => {
    let res = "";
    try {
      res = eval(input); //evaluates the math expression
    } catch (err) {
      console.log("invalid");
      setInput("Invalid Input");
    }

    //if it is a decimal number, round it to 3 decimal places
    if (res % 1 !== 0) res = Math.round((res + Number.EPSILON) * 1000) / 1000;
    setResult(res);
  };
  const changeplusminus = () => {
    if (result !== "") {
      if (result[0] === "-") {
        setResult(result.substring(1));
      } else {
        setResult("-" + result);
      }
    } else if (input !== "") {
      if (input[0] === "-") {
        setInput(input.substring(1));
      } else {
        setInput("-" + input);
      }
    }
  };
  return (
    <div className="App">
      <div className="header">
        <h1>Calculator</h1>
      </div>
      <div className="main">
        <Input input={input} setInput={setInput} result={result} />
        <Buttons
          getResults={getResults}
          handleClear={handleClear}
          handleInput={handleInput}
          changeplusminus={changeplusminus}
        />
      </div>
      <div className="footer">
        Created by Omprakash Choudhary |{" "}
        <a href="https://www.omprakash.me">Portfolio</a>
      </div>
    </div>
  );
}

export default App;
