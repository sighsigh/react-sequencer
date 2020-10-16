export interface DefaultPropsInterface {
  max: number;
  min: number;
  base: number;
}

interface DefaultsInterface {
  tempo: DefaultPropsInterface;
  steps: DefaultPropsInterface;
}

export const defaults: DefaultsInterface = {
  tempo: {
    max: 300,
    min: 20,
    base: 120,
  },
  steps: {
    max: 16,
    min: 2,
    base: 8,
  },
};
