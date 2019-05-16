import actionCreators from './actions';

const playSequence = actionCreators.playSequence;
const stopSequence = actionCreators.stopSequence;
const stepSequence = actionCreators.stepSequence;
const resetSequence = actionCreators.resetSequence;
const changeSteps = actionCreators.changeSteps;

export default {
    playSequence,
    stepSequence,
    stopSequence,
    resetSequence,
    changeSteps
}