import React from "react";
import { useTempo } from "../../context/Tempo";

import "./Clock.css";

const Clock: React.FC = () => {
  const delta = 10;
  const { tempo, setTempo } = useTempo()!;

  const decrement = () => {
    setTempo(Math.max(0, tempo - delta));
  };

  const increment = () => {
    setTempo(Math.min(300, tempo + delta));
  };

  return (
    <div className="cmp-block cmp-clock columns four">
      <h6>CLOCK</h6>
      <div className="cmp-clock__controls">
        <button onClick={decrement}>-</button>
        <span>{tempo} BPM</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default Clock;
