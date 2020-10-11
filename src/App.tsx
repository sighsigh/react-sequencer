import React from "react";

import { Clock, Grid, SequenceControls } from "@components/index";

const App: React.FC = () => {
  return (
    <div className="cmp-container">
      <Clock />
      <SequenceControls />
      <Grid />
    </div>
  );
};

export default App;
