import React from "react";
import ReactDOM from "react-dom";

// IMPORT SCSS FILE TO BE SOURCE OF STYLING

// IMPORT ROUTER
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import App from "./App";


ReactDOM.render(
  <Router>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
