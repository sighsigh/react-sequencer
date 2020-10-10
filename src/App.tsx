import React from "react";

import { useTempo } from "./context/Tempo";
import { Clock } from "./components";

const App: React.FC = () => {
  const { tempo, setTempo } = useTempo()!;
  return (
    <>
      <div>Tempo is: {tempo}</div>
      <Clock />
      <button onClick={() => setTempo(140)}>SET TO 140bpm</button>
    </>
  );
};

export default App;
