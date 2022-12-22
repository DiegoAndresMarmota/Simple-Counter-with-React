import React from "react";
import ReactDOM from "react-dom";
import Home from "./component/home.jsx";
import "./index.css";

let counter1 = -1;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;

setInterval(() => {
  counter1++;
  // counter1 == 10 ? ((counter1 = 0), counter2++) : true;
  // counter2 == 10 ? ((counter2 = 0), counter3++) : true;
  // counter3 == 10 ? ((counter3 = 0), counter4++) : true;
  // counter4 == 10 ? ((counter4 = 0), counter5++) : true;
  // counter5 == 10 ? (counter5 = 0) : true;

  console.log(counter1, counter2, counter3, counter4, counter5);

  ReactDOM.render(
    <Home
      fifth={counter5}
      fourth={counter4}
      third={counter3}
      second={counter2}
      first={counter1}
    />,
    document.querySelector("#app")
  );
}, 1000);
