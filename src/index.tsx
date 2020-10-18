import React from "react";
import ReactDOM from "react-dom";

import { TempoProvider } from "@context/Tempo";
import { StepsProvider } from "@context/Steps";
import { MatrixProvider } from "@context/Matrix";
import { App } from "@components/index";
import { defaults } from "@lib/defaults";

import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <TempoProvider defaults={defaults.tempo}>
    <StepsProvider defaults={defaults.steps}>
      <MatrixProvider>
        <App />
      </MatrixProvider>
    </StepsProvider>
  </TempoProvider>,
  document.getElementById("root")
);
