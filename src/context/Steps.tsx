import { DefaultPropsInterface } from "@lib/defaults";
import React, { createContext, useContext, useEffect, useState } from "react";

type StepsContextType = {
  steps: number;
  maxSteps: number;
  minSteps: number;
  currentStep: number;
  setSteps: (value: number) => void;
  setCurrentStep: (value: number) => void;
  resetSteps: () => void;
};

export const StepsContext = createContext<StepsContextType | undefined>(
  undefined
);

interface StepsProviderProps {
  defaults: DefaultPropsInterface;
  children: React.ReactNode;
}

export const StepsProvider: React.FC<StepsProviderProps> = (props) => {
  const [steps, setSteps] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const resetSteps = () => setSteps(props.defaults.base);

  useEffect(() => {
    setSteps(props.defaults.base);
  }, []);

  return (
    <StepsContext.Provider
      value={{
        steps,
        maxSteps: props.defaults.max,
        minSteps: props.defaults.min,
        setSteps,
        currentStep,
        setCurrentStep,
        resetSteps,
      }}
    >
      {props.children}
    </StepsContext.Provider>
  );
};

export const useSteps = () => useContext(StepsContext);
