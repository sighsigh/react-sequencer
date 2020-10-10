import React from "react";
import ReactDOM from "react-dom";

import { TempoProvider } from "@context/Tempo";
import { StepsProvider } from "@context/Steps";
import App from "./App";

import "./index.css";

ReactDOM.render(
  <TempoProvider>
    <StepsProvider steps={8}>
      <App />
    </StepsProvider>
  </TempoProvider>,
  document.getElementById("root")
);
