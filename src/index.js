import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { Contador } from "./Componentes/Contador";

let contador = 0;

setInterval(function () {
  ReactDOM.render(
    <Contador seconds={contador} />,
    document.getElementById("root")
  );
  contador += 1;
}, 1000);
