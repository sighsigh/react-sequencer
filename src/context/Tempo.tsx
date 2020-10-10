import React, { createContext, useContext, useEffect, useState } from "react";

type TempoContextType = {
  tempo: number;
  setTempo: (value: number) => void;
};

export const TempoContext = createContext<TempoContextType | undefined>(
  undefined
);

export const TempoProvider: React.FC = (props) => {
  const [tempo, setTempo] = useState(0);

  useEffect(() => {
    setTempo(120); // TODO: use global settings
  }, []);

  return (
    <TempoContext.Provider value={{ tempo, setTempo }}>
      {props.children}
    </TempoContext.Provider>
  );
};

export const useTempo = () => useContext(TempoContext);
