import React, { createContext, useContext, useEffect, useState } from "react";

type StepsContextType = {
  steps: number;
  currentStep: number;
  setSteps: (value: number) => void;
  setCurrentStep: (value: number) => void;
};

export const StepsContext = createContext<StepsContextType | undefined>(
  undefined
);

interface StepsProviderProps {
  steps: number;
  children: React.ReactNode;
}

export const StepsProvider: React.FC<StepsProviderProps> = (props) => {
  const [steps, setSteps] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    setSteps(props.steps);
  }, []);

  return (
    <StepsContext.Provider
      value={{ steps, setSteps, currentStep, setCurrentStep }}
    >
      {props.children}
    </StepsContext.Provider>
  );
};

export const useSteps = () => useContext(StepsContext);
