import types from './types';

// private


// public
const addTrack = (slots) => {
  return {
    type: types.ADD_TRACK,
    payload: slots
  }
}

const updateTrack = (coords) => {
  return {
    type: types.UPDATE_TRACK,
    payload: {
      tx: coords.trackIndex,
      sx: coords.slotIndex,
      value: coords.value
    }
  }
}

const deleteTrack = (trackIndex) => {
  return {
    type: types.DELETE_TRACK,
    payload: trackIndex
  }
};

const updateMatrixLength = (newLength) => {
  return {
    type: types.UPDATE_MATRIX_LENGTH,
    payload: newLength
  }
};

const clearMatrix = () => {
  return {
    type: types.CLEAR_MATRIX
  }
};

const randomFillMatrix = () => {
  return {
    type: types.RANDOM_FILL_MATRIX
  }
};

export default {
    addTrack,
    updateTrack,
    deleteTrack,
    updateMatrixLength,
    clearMatrix,
    randomFillMatrix
  }