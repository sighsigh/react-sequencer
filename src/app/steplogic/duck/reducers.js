import types from './types';

// private
const initialState = {
    isPlaying: false,
    currentStep: 0,
    steps: 8
};

// public
const stepLogicReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.PLAY_SEQUENCE:
            state = {
                ...state,
                isPlaying: true
            };
            break;
        case types.STEP_SEQUENCE:
            state = {
                ...state,
                currentStep: state.currentStep === (state.steps - 1) ? 0 : state.currentStep + 1
            };
            break;
        case types.STOP_SEQUENCE:
            state = {
                ...state,
                isPlaying: false
            }
            break;
        case types.RESET_SEQUENCE:
            state = {
                ...state,
                isPlaying: false,
                currentStep: 0
            }
            break;

        case types.CHANGE_STEPS:
            state = {
                ...state,
                steps: action.payload
            }
            break;

        default:
            return state;
    }

    return state;
};

export default stepLogicReducer;