import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { number1, number2, number3 } from "./numberAdd.js";

function App() {
  return (
    <div className="App">
      <div className="result">0</div>
      <div className="bottom">
        <div className="left">
          <button className="numberRoboto" onClick={() => console.log(1)}>
            1
          </button>
          <button className="numberRoboto" onClick={() => console.log(2)}>
            2
          </button>
          <button className="numberRoboto" onClick={() => console.log(3)}>
            3
          </button>
          <button className="numberRoboto" onClick={() => console.log(4)}>
            4
          </button>
          <button className="numberRoboto" onClick={() => console.log(5)}>
            5
          </button>
          <button className="numberRoboto" onClick={() => console.log(6)}>
            6
          </button>
          <button className="numberRoboto" onClick={() => console.log(7)}>
            7
          </button>
          <button className="numberRoboto" onClick={() => console.log(8)}>
            8
          </button>
          <button className="numberRoboto" onClick={() => console.log(9)}>
            9
          </button>
        </div>
        <div className="right">
          <buttom className="numberRoboto" onClick={() => console.log("+")}>
            +
          </buttom>
          <buttom className="numberRoboto" onClick={() => console.log("-")}>
            -
          </buttom>
          <buttom className="numberRoboto" onClick={() => console.log("*")}>
            x
          </buttom>
          <buttom className="numberRoboto" onClick={() => console.log("/")}>
            /
          </buttom>
          <buttom className="numberRoboto" onClick={() => console.log("=")}>
            =
          </buttom>
          <buttom className="numberRoboto" onClick={() => console.log("C")}>
            C
          </buttom>
        </div>
      </div>
    </div>
  );
}

export default App;
