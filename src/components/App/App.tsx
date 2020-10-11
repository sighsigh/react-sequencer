import React from "react";

import { Clock, Grid, SequenceControls } from "@components/index";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Clock />
      <SequenceControls />
      <Grid />
    </div>
  );
};

export default App;
