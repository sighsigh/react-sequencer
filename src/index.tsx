import React from "react";
import ReactDOM from "react-dom";

import { TempoProvider } from "./context/Tempo";
import App from "./App";

import "./index.css";

ReactDOM.render(
  <TempoProvider>
    <App />
  </TempoProvider>,
  document.getElementById("root")
);
