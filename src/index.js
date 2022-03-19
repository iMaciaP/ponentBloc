import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
