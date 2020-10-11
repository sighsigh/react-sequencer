import React from "react";
import { useMatrix } from "@context/Matrix";

import { Button } from "semantic-ui-react";

const createRandomSequence = (range: number): number[] => {
  const sequence = [];
  for (var i = 0; i < range; i++) {
    const val = Math.floor(Math.random() * 2);
    sequence.push(val);
  }
  return sequence;
};

const randomFill = (matrix: number[][]) => {
  return matrix.map((_) => createRandomSequence(matrix[0].length));
};

const GridControls: React.FC = () => {
  const { rows, setRows, schema, setSchema } = useMatrix()!;

  const add = () => setRows(rows + 1);

  const clear = () => {
    const _schema = [...schema];
    setSchema(_schema.map((row) => row.map((col) => 0)));
  };

  const random = () => setSchema(randomFill(schema));

  return (
    <div>
      <Button.Group floated="left">
        <Button icon="plus" content="ADD TRACK" onClick={add} />
      </Button.Group>
      <Button.Group basic floated="right">
        <Button icon="times" content="CLEAR ALL" onClick={clear} />
        <Button icon="question" content="RANDOMIZE" onClick={random} />
      </Button.Group>
    </div>
  );
};

export default GridControls;
