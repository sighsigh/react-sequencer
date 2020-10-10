import { connect } from 'react-redux';
import SequencerComponent from './SequencerGridComponent';
import { sequencerOperations } from './duck';

// public
const mapStateToProps = (state, ownProps) => {
    const { matrix } = state.sequencer_grid;
    const { steps, currentStep } = state.steplogic;

    return {
        matrix,
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
    const randomFillMatrix = () => dispatch(sequencerOperations.randomFillMatrix());

    return {
        addTrack,
        updateTrack,
        deleteTrack,
        updateMatrixLength,
        clearMatrix,
        randomFillMatrix
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SequencerComponent);