import React from "react";
import { useMatrix } from "@context/Matrix";

import "./GridControls.css";

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
    <div className="cmp-grid__controls">
      <button onClick={add}>+ ADD TRACK</button>
      <button onClick={clear}>CLEAR ALL</button>
      <button onClick={random}>RANDOMIZE</button>
    </div>
  );
};

export default GridControls;
