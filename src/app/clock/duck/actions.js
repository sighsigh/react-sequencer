import types from './types';

const incrementTempo = delta => {
    return {
      type: types.INCREMENT_TEMPO,
      payload: delta
    }
};

const decrementTempo = delta => {
    return {
      type: types.DECREMENT_TEMPO,
      payload: delta
    }
};

const setTempo = tempo => {
    return {
      type: types.SET_TEMPO,
      payload: tempo
    };
};

export default {
    incrementTempo,
    decrementTempo,
    setTempo
}