import React, { useEffect, useState } from "react";

import { useMatrix } from "@context/Matrix";
import { useSteps } from "@context/Steps";

import { Button } from "semantic-ui-react";
import { SoundSelect } from "@components/index";

import "./GridMatrix.css";

const GridMatrix: React.FC = () => {
  const { schema, setSchema } = useMatrix()!;
  const { currentStep } = useSteps()!;
  const [tick, setTick] = useState(0);

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

  useEffect(() => {
    if (currentStep != undefined) {
      setTick(tick + 1);
    }
  }, [currentStep]);

  return (
    <div className="matrix">
      {schema.map((track, i) => {
        const trackIndex = i;
        return (
          <div className="matrix-row" key={`track-${i}`}>
            <div className="matrix-row__select">
              <SoundSelect tick={tick} isPlaying={track[currentStep] === 1} />
            </div>
            <div className="matrix-row__cells">
              <Button.Group>
                {track.map((slotVal, j) => {
                  const slotIndex = j;
                  return (
                    <Button
                      key={`cell-${track[i]}-${j}`}
                      className={j !== 0 && j % 4 === 0 ? "last-quarter" : ""}
                      icon={slotVal ? "circle" : "circle outline"}
                      basic
                      negative={currentStep === slotIndex}
                      color="grey"
                      onClick={() =>
                        updateSchema(trackIndex, slotIndex, slotVal ? 0 : 1)
                      }
                    />
                  );
                })}
              </Button.Group>
            </div>

            {schema.length > 1 && (
              <div className="matrix-row__delete">
                <Button onClick={() => deleteTrack(trackIndex)} icon="trash" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default GridMatrix;
