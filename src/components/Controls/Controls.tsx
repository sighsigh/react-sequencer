import React, { useEffect, useState } from "react";

import { useSteps } from "@context/Steps";
import { useTempo } from "@context/Tempo";
import useInterval from "@hooks/useInterval";

import CmpLayout from "@components/CmpLayout/CmpLayout";
import { Button } from "semantic-ui-react";

const getTempoInMs = (tempo: number): number => 60000 / tempo;

const SequenceControls: React.FC = () => {
  const {
    steps,
    maxSteps,
    minSteps,
    currentStep,
    setCurrentStep,
    setSteps,
    resetSteps,
  } = useSteps()!;
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
    const resultSteps = steps + delta > maxSteps ? steps : steps + delta;
    setSteps(resultSteps);
  };

  const removeStep = (delta: number = 1): void => {
    const resultSteps = steps - delta < minSteps ? steps : steps - delta;
    if (currentStep === steps - 1) {
      setCurrentStep(currentStep - 1);
    }
    setSteps(resultSteps);
  };

  useEffect(() => {
    onChangeTempo();
    setTempoInMs(getTempoInMs(tempo));
  }, [tempo]);

  console.log(tempoInMs);

  useInterval(
    () => {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep > steps - 1 ? 0 : nextStep);
    },
    isPlaying ? tempoInMs : null
  );

  return (
    <CmpLayout title="Sequence Controls">
      <Button.Group floated="left">
        <Button icon="play" onClick={play} />
        <Button icon="pause" onClick={pause} />
        <Button icon="stop" onClick={stop} />
      </Button.Group>

      <Button.Group floated="right">
        <Button icon="minus" onClick={() => removeStep()} />
        <Button content={steps} onClick={() => resetSteps()} />
        <Button icon="plus" onClick={() => addStep()} />
      </Button.Group>
    </CmpLayout>
  );
};

export default SequenceControls;
