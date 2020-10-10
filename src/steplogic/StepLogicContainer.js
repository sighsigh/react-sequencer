import { connect } from 'react-redux';
import StepLogicComponent from './StepLogicComponent';
import { 
    StepLogicSelectors as selectors, 
    StepLogicOperations as operations } from './duck';

const mapStateToProps = (state, ownProps) => {
    const { isPlaying, currentStep, steps } = state.steplogic;
    return {
        isPlaying,
        currentStep,
        steps,
        tempoInMs: selectors.getTempoInMs(state)
    }
};

const mapDispatchToProps = dispatch => {
    const playSequence = () => dispatch(operations.playSequence());
    const stepSequence = () => dispatch(operations.stepSequence());
    const stopSequence = () => dispatch(operations.stopSequence());
    const resetSequence = () => dispatch(operations.resetSequence());
    const changeSteps = newVal => dispatch(operations.changeSteps(newVal));
    const changeCurrentStep = newVal => dispatch(operations.changeCurrentStep(newVal));

    return {
        playSequence,
        stepSequence,
        stopSequence,
        resetSequence,
        changeSteps,
        changeCurrentStep
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StepLogicComponent);