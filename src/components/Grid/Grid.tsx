import React, { useEffect } from "react";

import { GridControls } from "@components/index";
import { useMatrix } from "@context/Matrix";
import { useSteps } from "@context/Steps";
import GridMatrix from "./GridMatrix";

import "./Grid.css";

const createEmptyTrack = (cells: number): number[] => new Array(cells).fill(0);

const Grid: React.FC = () => {
  const { rows, columns, schema, setSchema, setColumns } = useMatrix()!;
  const { steps } = useSteps()!;

  useEffect(() => {
    if (schema[0].length === 0) {
      // on init scenario
      setSchema(schema.map((_) => createEmptyTrack(columns)));
      return;
    }

    if (schema[0].length < columns) {
      // add column
      setSchema(
        schema.map((track) => {
          track.push(0);
          return track;
        })
      );
      return;
    }

    if (schema[0].length > columns) {
      // remove column
      setSchema(
        schema.map((track) => {
          track.pop();
          return track;
        })
      );
    }
  }, [columns]);

  useEffect(() => {
    const _schema = [...schema];

    if (_schema.length > rows) {
      // delete last row
      setSchema(_schema.slice(0, rows));
      return;
    }

    if (_schema.length < rows) {
      // add row
      _schema.push(createEmptyTrack(columns));
      setSchema(_schema);
    }
  }, [rows]);

  useEffect(() => {
    setColumns(steps);
  }, [steps]);

  return (
    <div className="cmp-block cmp-grid twelve columns">
      <h6>GRID</h6>
      <GridControls />
      <GridMatrix />
    </div>
  );
};

export default Grid;
