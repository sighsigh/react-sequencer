import React from "react";
import { useTempo } from "../../context/Tempo";

import CmpLayout from "@components/CmpLayout/CmpLayout";
import { Button } from "semantic-ui-react";

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
    <CmpLayout title="Clock">
      <Button.Group>
        <Button icon="minus" onClick={decrement} />
        <Button content={`${tempo} BPM`} />
        <Button icon="plus" onClick={increment} />
      </Button.Group>
    </CmpLayout>
  );
};

export default Clock;
