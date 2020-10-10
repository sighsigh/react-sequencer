import actionCreators from './actions';

const playSequence = actionCreators.playSequence;
const stopSequence = actionCreators.stopSequence;
const stepSequence = actionCreators.stepSequence;
const resetSequence = actionCreators.resetSequence;
const changeSteps = actionCreators.changeSteps;
const changeCurrentStep = actionCreators.changeCurrentStep;

export default {
    playSequence,
    stepSequence,
    stopSequence,
    resetSequence,
    changeSteps,
    changeCurrentStep
}