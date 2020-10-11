import React, { useEffect, useState } from "react";

import { useSteps } from "@context/Steps";
import { useTempo } from "@context/Tempo";
import useInterval from "@hooks/useInterval";

import "./SequenceControls.css";

const settings = {
  steps: {
    min: 2,
    max: 16,
  },
};

const getTempoInMs = (tempo: number): number => 60000 / tempo;

const SequenceControls: React.FC = () => {
  const { steps, currentStep, setCurrentStep, setSteps } = useSteps()!;
  const { tempo } = useTempo()!;
  const [tempoInMs, setTempoInMs] = useState(getTempoInMs(tempo));
  const [isPlaying, setIsPlaying] = useState(false);

  const onChangeTempo = () => {
    if (isPlaying) {
      pause();
      play();
    }
  };

  const play = () => {
    setIsPlaying(true);
  };

  const pause = () => {
    setIsPlaying(false);
  };

  const stop = () => {
    pause();
    setCurrentStep(0);
  };

  const addStep = (delta: number = 1): void => {
    const resultSteps =
      steps + delta > settings.steps.max ? steps : steps + delta;
    setSteps(resultSteps);
  };

  const removeStep = (delta: number = 1): void => {
    const resultSteps =
      steps - delta < settings.steps.min ? steps : steps - delta;
    if (currentStep === steps - 1) {
      setCurrentStep(currentStep - 1);
    }
    setSteps(resultSteps);
  };

  useEffect(() => {
    onChangeTempo();
    setTempoInMs(getTempoInMs(tempo));
  }, [tempo]);

  useInterval(
    () => {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep > steps - 1 ? 0 : nextStep);
    },
    isPlaying ? tempoInMs : null
  );

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
        <button onClick={() => removeStep()}>
          <i className="fa fa-minus"></i>
        </button>
        <span>{steps}</span>
        <button onClick={() => addStep()}>
          <i className="fa fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default SequenceControls;
