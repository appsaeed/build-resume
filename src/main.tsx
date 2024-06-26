import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Resume from "./sections/Resume";

//select main dom element
const selector = import.meta.env.VITE_MAIN_DOM || "%VITE_MAIN_DOM%";
//inject html
ReactDOM.createRoot(document.getElementById(selector)!).render(
  <React.StrictMode>
    <Resume />
  </React.StrictMode>
);
