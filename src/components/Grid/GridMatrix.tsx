import * as React from "react";
import { useMatrix } from "@context/Matrix";

import "./GridMatrix.css";
import { useSteps } from "@context/Steps";

const GridMatrix: React.FC = () => {
  const { schema, setSchema } = useMatrix()!;
  const { currentStep } = useSteps()!;

  const updateSchema = (x: number, y: number, value: number): void => {
    const _schema = [...schema];
    _schema[x].splice(y, 1, value);
    setSchema(_schema);
  };

  const deleteTrack = (index: number): void => {
    const _schema = [...schema];
    _schema.splice(index, 1);
    setSchema(_schema);
  };

  return (
    <div className="cmp-matrix">
      {schema.map((track, i) => {
        const trackIndex = i;
        return (
          /* Track */
          <div className="cmp-grid" key={`track-${i}`}>
            <div className="index">{i + 1}</div>

            {track.map((slotVal, j) => {
              const slotIndex = j;
              return (
                /* Cell */
                <span
                  key={`cell-${track[i]}-${j}`}
                  className={`cmp-grid__cell ${slotVal ? "active" : ""}`}
                  onClick={() =>
                    updateSchema(trackIndex, slotIndex, slotVal ? 0 : 1)
                  }
                />
              );
            })}

            {/* Delete Track */}
            {schema.length > 1 ? (
              <button
                className="cmp-grid__cell--remove"
                onClick={() => deleteTrack(trackIndex)}
              >
                <i className="fa fa-trash"></i>
              </button>
            ) : (
              ""
            )}
          </div>
        );
      })}
      <div
        className="cmp-matrix__cursor"
        style={{ left: `${currentStep * 30}px` }}
      />
    </div>
  );
};

export default GridMatrix;
