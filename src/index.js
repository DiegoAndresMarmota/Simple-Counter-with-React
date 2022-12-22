import React from "react";
import ReactDOM from "react-dom/client";
import SecondsCounter from "./component/SecondsCounter.jsx";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SecondsCounter seconds={3434} />
  </React.StrictMode>
);
