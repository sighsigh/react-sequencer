import React from "react";
import { useMatrix } from "@context/Matrix";

import "./GridControls.css";

const GridControls: React.FC = () => {
  const { rows, setRows, schema, setSchema } = useMatrix()!;

  const clearSchema = () => {
    const _schema = [...schema];

    setSchema(_schema.map((row) => row.map((col) => 0)));
  };

  return (
    <div className="cmp-grid__controls">
      <button onClick={() => setRows(rows + 1)}>+ ADD TRACK</button>
      <button onClick={clearSchema}>CLEAR ALL</button>
      {/* <button
      onClick={() => this.props.randomFillMatrix()}
      >
        RANDOMIZE
      </button> */}
      <br />
    </div>
  );
};

export default GridControls;
