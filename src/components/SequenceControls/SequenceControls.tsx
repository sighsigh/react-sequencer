import React, { useContext, useEffect, useState } from "react";

import { StepsContext } from "@context/Steps";
import { TempoContext } from "@context/Tempo";

import "./SequenceControls.css";

const settings = {
  steps: {
    min: 2,
    max: 16,
  },
};

const getTempoInMs = (tempo: number): number => 60000 / tempo;

const SequenceControls: React.FC = () => {
  let timerId: any;
  const { steps, currentStep, setCurrentStep, setSteps } = useContext(
    StepsContext
  )!;
  const { tempo } = useContext(TempoContext)!;
  const [tempoInMs, setTempoInMs] = useState(getTempoInMs(tempo));
  const [isPlaying, setIsPlaying] = useState(false);

  const onChangeTempo = () => {
    if (isPlaying) {
      stop();
      play();
    }
  };

  const play = () => {
    clearInterval(timerId);
    timerId = setInterval(() => {
      setCurrentStep(currentStep + 1);
    }, tempoInMs);
    setIsPlaying(true);
  };

  const pause = () => {
    clearInterval(timerId);
    setIsPlaying(false);
  };

  const stop = () => {
    pause();
    setCurrentStep(1);
  };

  const addStep = (delta: number): void => {
    const resultSteps =
      steps + delta > settings.steps.max ? steps : steps + delta;
    setSteps(resultSteps);
  };

  const removeStep = (delta: number): void => {
    const resultSteps =
      steps - delta < settings.steps.min ? steps : steps - delta;
    if (currentStep === steps) {
      setCurrentStep(currentStep - 1);
    }
    setSteps(resultSteps);
  };

  useEffect(() => {
    onChangeTempo();
    setTempoInMs(getTempoInMs(tempo));
  }, [tempo]);

  return (
    <div className="cmp-block cmp-steplogic columns four">
      <h6>SEQUENCE CONTROLS</h6>

      <div className="cmp-steplogic__controls">
        <button onClick={play}>
          <i className="fa fa-play"></i>
        </button>
        <button onClick={pause}>
          <i className="fa fa-pause"></i>
        </button>
        <button onClick={stop}>
          <i className="fa fa-stop"></i>
        </button>

        <div className="cmp-steplogic__count">
          <strong>{`${currentStep + 1} / ${steps}`}</strong>
        </div>
      </div>

      <div className="cmp-steplogic__steps">
        <button onClick={() => removeStep(1)}>-</button>
        <span>{steps}</span>
        <button onClick={() => addStep(1)}>+</button>
      </div>
    </div>
  );
};

export default SequenceControls;
