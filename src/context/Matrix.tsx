import React, { createContext, useContext, useEffect, useState } from "react";

type MatrixContextType = {
  schema: Array<Array<number>>;
  rows: number;
  columns: number;
  setSchema: (value: Array<any>) => void;
  setRows: (value: number) => void;
  setColumns: (value: number) => void;
};

export const MatrixContext = createContext<MatrixContextType | undefined>(
  undefined
);

export const MatrixProvider: React.FC = (props) => {
  const [rows, setRows] = useState(1);
  const [columns, setColumns] = useState(0);
  const [schema, setSchema] = useState([[]]);

  return (
    <MatrixContext.Provider
      value={{ schema, rows, columns, setSchema, setRows, setColumns }}
    >
      {props.children}
    </MatrixContext.Provider>
  );
};

export const useMatrix = () => useContext(MatrixContext);
