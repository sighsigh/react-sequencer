import types from './types';

// private
const initialState = {
    bpm: 120
};

// public
const ClockReducer = (state = initialState, action) => {
    const { bpm } = state;

    switch(action.type) {
        case types.INCREMENT_TEMPO:
            state = {
                ...state,
                bpm: bpm + action.payload
            };
            break;
        case types.DECREMENT_TEMPO:
            state = {
                ...state,
                bpm: (bpm - action.payload) > 0 ? bpm - action.payload : 0
            }
            break;
        case types.CHANGE_TEMPO:
            state = {
                ...state,
                bpm: action.payload
            };
            break;
        default:
            return state;
    }

    return state;
};

export default ClockReducer;