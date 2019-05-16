import { connect } from 'react-redux';
import SequencerComponent from './SequencerComponent';
import { sequencerOperations } from './duck';

// private


// public
const mapStateToProps = (state, ownProps) => {
    const { matrix, tracksNum } = state.sequencer;
    const { steps, currentStep } = state.steplogic;

    return {
        matrix,
        tracksNum,
        steps,
        currentStep
    };
}

const mapDispatchToProps = dispatch => {
    const addTrack = (slots) => dispatch(sequencerOperations.addTrack(slots));
    const updateTrack = (coords) => dispatch(sequencerOperations.updateTrack(coords));
    const deleteTrack = (trackIndex) => dispatch(sequencerOperations.deleteTrack(trackIndex));
    const updateMatrixLength = (coords) => dispatch(sequencerOperations.updateMatrixLength(coords));
    const clearMatrix = () => dispatch(sequencerOperations.clearMatrix());

    return {
        addTrack,
        updateTrack,
        deleteTrack,
        updateMatrixLength,
        clearMatrix
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SequencerComponent);