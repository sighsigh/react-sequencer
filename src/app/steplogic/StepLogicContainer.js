import { connect } from 'react-redux';
import StepLogicComponent from './StepLogicComponent';
import { StepLogicOperations } from './duck';

const mapStateToProps = (state, ownProps) => {
    const { bpm } = state.clock;
    const { isPlaying, currentStep, steps } = state.steplogic;
    return {
        bpm,
        isPlaying,
        currentStep,
        steps
    }
};

const mapDispatchToProps = dispatch => {
    const playSequence = () => dispatch(StepLogicOperations.playSequence());
    const stepSequence = () => dispatch(StepLogicOperations.stepSequence());
    const stopSequence = () => dispatch(StepLogicOperations.stopSequence());
    const resetSequence = () => dispatch(StepLogicOperations.resetSequence());
    const changeSteps = (newVal) => dispatch(StepLogicOperations.changeSteps(newVal));

    return {
        playSequence,
        stepSequence,
        stopSequence,
        resetSequence,
        changeSteps
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StepLogicComponent);