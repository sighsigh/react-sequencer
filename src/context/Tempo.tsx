import React, { createContext, useContext, useEffect, useState } from "react";

type TempoContextType = {
  tempo: number;
  setTempo: (value: number) => void;
};

export const TempoContext = createContext<TempoContextType | undefined>(
  undefined
);

interface TempoProviderProps {
  default: number;
  children: React.ReactNode;
}

export const TempoProvider: React.FC<TempoProviderProps> = (props) => {
  const [tempo, setTempo] = useState(0);

  useEffect(() => {
    setTempo(props.default);
  }, []);

  return (
    <TempoContext.Provider value={{ tempo, setTempo }}>
      {props.children}
    </TempoContext.Provider>
  );
};

export const useTempo = () => useContext(TempoContext);
