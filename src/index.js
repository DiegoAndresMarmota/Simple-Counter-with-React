import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Contador } from "./Contador";

let contador = 0;

setInterval(function () {
  ReactDOM.render(
    <Contador segundos={contador} />,
    document.getElementById("root")
  );
  contador += 1;
}, 1000);
