import React from "react";

import { Clock, SequenceControls } from "@components/index";

const App: React.FC = () => {
  return (
    <div className="cmp-container">
      <Clock />
      <SequenceControls />
    </div>
  );
};

export default App;
