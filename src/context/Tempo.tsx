import { DefaultPropsInterface } from "@lib/defaults";
import React, { createContext, useContext, useEffect, useState } from "react";

type TempoContextType = {
  tempo: number;
  minTempo: number;
  maxTempo: number;
  setTempo: (value: number) => void;
  resetTempo: () => void;
};

export const TempoContext = createContext<TempoContextType | undefined>(
  undefined
);

interface TempoProviderProps {
  defaults: DefaultPropsInterface;
  children: React.ReactNode;
}

export const TempoProvider: React.FC<TempoProviderProps> = (props) => {
  const [tempo, setTempo] = useState(0);
  const resetTempo = () => setTempo(props.defaults.base);

  useEffect(() => {
    setTempo(props.defaults.base);
  }, []);

  return (
    <TempoContext.Provider
      value={{
        tempo,
        minTempo: props.defaults.min,
        maxTempo: props.defaults.max,
        setTempo,
        resetTempo,
      }}
    >
      {props.children}
    </TempoContext.Provider>
  );
};

export const useTempo = () => useContext(TempoContext);
