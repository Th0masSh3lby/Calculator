import "./App.css";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("0");

  //handleNumber - for when clicked a number
  const handleNumber = (event) => {
    const num = event.target.textContent;
    if (display === "0") {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

  //handleOperator - for when clicked a operation
  const handleOperator = (event) => {
    const op = event.target.textContent;

    var regex = /([\-\+\*\/]\s)$/;
    var regs = /(\-\s)$/;
    var reg22 = /[\+\*\/]\s\s\-\s$/;

    if (reg22.test(display)) {
      let temp1 = display.slice(0, display.length - 5);
      setDisplay(temp1 + " " + op + " ");
      return;
    }

    if (regex.test(display)) {
      if (op !== "-" || (op === "-" && regs.test(display))) {
        let temp = display.slice(0, display.length - 3);
        setDisplay(temp + " " + op + " ");
        return;
      }
    }
    let last1 = display[display.length - 1];
    if (last1 !== ".") {
      setDisplay(display + " " + op + " ");
      return;
    }
  };

  //handleDecimal - for decimal point
  const handleDecimal = (event) => {
    const dec = event.target.textContent;

    setDisplay(display.toString());
    let temp = display.split(" ");
    let last = temp[temp.length - 1];
    if (last.indexOf(dec) < 0) {
      setDisplay(display + dec);
    }
  };

  //handleClear for clearing the display
  const handleAC = (event) => {
    setDisplay("0");
  };

  //handleEqual for evaluating
  const handleEqual = (event) => {
    if (/[0-9]$/.test(display)) {
      setDisplay(eval(display).toString());
    } else {
      setDisplay("error : add number after operation");
    }
  };

  const buttons = [
    {
      name: "one",
      text: "1",
      handleClick: handleNumber,
    },
    {
      name: "two",
      text: "2",
      handleClick: handleNumber,
    },
    {
      name: "three",
      text: "3",
      handleClick: handleNumber,
    },
    {
      name: "add",
      text: "+",
      handleClick: handleOperator,
    },
    {
      name: "four",
      text: "4",
      handleClick: handleNumber,
    },
    {
      name: "five",
      text: "5",
      handleClick: handleNumber,
    },
    {
      name: "six",
      text: "6",
      handleClick: handleNumber,
    },
    {
      name: "subtract",
      text: "-",
      handleClick: handleOperator,
    },
    {
      name: "seven",
      text: "7",
      handleClick: handleNumber,
    },
    {
      name: "eight",
      text: "8",
      handleClick: handleNumber,
    },
    {
      name: "nine",
      text: "9",
      handleClick: handleNumber,
    },
    { name: "multiply", text: "*", handleClick: handleOperator },
    {
      name: "zero",
      text: "0",
      handleClick: handleNumber,
    },
    {
      name: "decimal",
      text: ".",
      handleClick: handleDecimal,
    },

    {
      name: "equals",
      text: "=",
      handleClick: handleEqual,
    },
    {
      name: "divide",
      text: "/",
      handleClick: handleOperator,
    },
  ];

  return (
    <div className="App">
      <div id="calci">
        <div id="display-AC">
          <div id="display">{display}</div>
          <button id="clear" onClick={handleAC}>
            AC
          </button>
        </div>
        <div className="buttons">
          {buttons.map((obj) => {
            return (
              <button onClick={obj.handleClick} id={obj.name}>
                {obj.text}
              </button>
            );
          })}
        </div>
      </div>
      <p>by Aravind</p>
    </div>
  );
}

export default App;
