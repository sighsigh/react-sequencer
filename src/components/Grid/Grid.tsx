import React, { useEffect } from "react";

import { GridControls } from "@components/index";
import { useMatrix } from "@context/Matrix";
import { useSteps } from "@context/Steps";
import GridMatrix from "./GridMatrix";
import CmpLayout from "@components/CmpLayout/CmpLayout";

import "./Grid.css";

const createEmptyTrack = (cells: number): number[] => new Array(cells).fill(0);

const Grid: React.FC = () => {
  const { rows, columns, schema, setSchema, setColumns } = useMatrix()!;
  const { steps } = useSteps()!;

  useEffect(() => {
    const rowLength = schema[0].length;
    const columnsDiff = Math.abs(rowLength - columns);

    if (rowLength === 0) {
      // on init scenario
      setSchema(schema.map((_) => createEmptyTrack(columns)));
      return;
    }

    if (rowLength < columns) {
      // add column(s)
      setSchema(
        schema.map((track) => {
          track.push(...new Array(columnsDiff).fill(0));
          return track;
        })
      );
      return;
    }

    if (rowLength > columns) {
      // remove column(s)
      setSchema(
        schema.map((track) => {
          const _track = [...track];
          _track.splice(-columnsDiff);
          return _track;
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
    <CmpLayout title="Grid">
      <GridControls />
      <GridMatrix />
    </CmpLayout>
  );
};

export default Grid;
