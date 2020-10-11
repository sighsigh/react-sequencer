import React from "react";
import ReactDOM from "react-dom";

import { TempoProvider } from "@context/Tempo";
import { StepsProvider } from "@context/Steps";
import { MatrixProvider } from "@context/Matrix";
import { App } from "@components/index";

import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <TempoProvider default={120}>
    <StepsProvider steps={8}>
      <MatrixProvider>
        <App />
      </MatrixProvider>
    </StepsProvider>
  </TempoProvider>,
  document.getElementById("root")
);
