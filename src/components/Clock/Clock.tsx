import React from "react";
import { useTempo } from "../../context/Tempo";

import CmpLayout from "@components/CmpLayout/CmpLayout";
import { Button } from "semantic-ui-react";

const Clock: React.FC = () => {
  const delta = 10;
  const { tempo, minTempo, maxTempo, setTempo, resetTempo } = useTempo()!;

  const decrement = () => {
    setTempo(Math.max(minTempo, tempo - delta));
  };

  const increment = () => {
    setTempo(Math.min(maxTempo, tempo + delta));
  };

  const reset = () => resetTempo();

  return (
    <CmpLayout title="Clock">
      <Button.Group>
        <Button icon="minus" onClick={decrement} />
        <Button content={`${tempo} BPM`} onClick={reset} />
        <Button icon="plus" onClick={increment} />
      </Button.Group>
    </CmpLayout>
  );
};

export default Clock;
