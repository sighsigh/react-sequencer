import actionCreators from './actions';

const incrementTempo = actionCreators.incrementTempo;
const decrementTempo = actionCreators.decrementTempo;
const setTempo = actionCreators.setTempo;
const addTrack = actionCreators.addTrack;
const updateTrack = actionCreators.updateTrack;
const deleteTrack = actionCreators.deleteTrack;
const updateMatrixLength = actionCreators.updateMatrixLength;
const clearMatrix = actionCreators.clearMatrix;
const randomFillMatrix = actionCreators.randomFillMatrix;

export default {
    incrementTempo,
    decrementTempo,
    setTempo,
    addTrack,
    updateTrack,
    deleteTrack,
    updateMatrixLength,
    clearMatrix,
    randomFillMatrix
}