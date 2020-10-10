import types from './types';

const playSequence = () => {
    return {
        type: types.PLAY_SEQUENCE,
    }
};

const stepSequence = () => {
    return {
        type: types.STEP_SEQUENCE,
    }
};

const stopSequence = () => {
    return {
        type: types.STOP_SEQUENCE
    }
};

const resetSequence = () => {
    return {
        type: types.RESET_SEQUENCE
    }
};

const changeSteps = (newVal) => {
    return {
        type: types.CHANGE_STEPS,
        payload: parseInt(newVal)
    }
};

const changeCurrentStep = newVal => {
    return {
        type: types.CHANGE_CURRENT_STEP,
        payload: parseInt(newVal)
    }
};

export default {
    playSequence,
    stepSequence,
    stopSequence,
    resetSequence,
    changeSteps,
    changeCurrentStep
}