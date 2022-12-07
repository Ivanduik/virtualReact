import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/reset.css";
import "./index.css";
import { App } from "./App";
import { Router } from "./Router/Router";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
