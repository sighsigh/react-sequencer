import types from './types';

// private
const createTrack = steps => new Array(steps).fill(0);
const createRandomSequence = range => {
    const sequence = [];
    for (var i = 0; i < range; i++) {
        const val = Math.floor(Math.random() * 2);
        sequence.push(val);
    }
    return sequence;
}

const getRandomlyFilledMatrix = matrix => {
    const seqLength = matrix[0].length;
    const newMatrix = [];
    matrix.forEach(seq => {
        newMatrix.push(createRandomSequence(seqLength));
    });
    return newMatrix;
};

const getUpdatedMatrix = (matrix, newLength) => {
    const newMatrix = [];

    matrix.forEach((track, i) => {
        const diff = Math.abs(newLength - track.length);

        if (newLength > track.length) {
            const restArr = new Array(diff).fill(0);
            track = track.concat(restArr);
        } 
        else if (newLength < track.length) {
            track.splice(track.length - diff);
        }
        newMatrix.push(track);
    });

    return newMatrix;
};

const getClearMatrix = (matrix) => {
    matrix.forEach((track, i) => {
        matrix[i] = new Array(track.length).fill(0);
    });

    return matrix;

};

const initialState = {
    matrix: [[/* array of arrays */]]
};

// public
const SequencerTracksReducer = (state = initialState, action) => {
    let _matrix = [...state.matrix];

    switch(action.type) {

        case types.ADD_TRACK:
            _matrix.push(createTrack(action.payload));
            state = {
                ...state,
                matrix: _matrix
            };            
            break;

        case types.DELETE_TRACK:
            _matrix.splice(action.payload, 1);
            state = {
                ...state,
                matrix: _matrix
            };
            break;

        case types.UPDATE_TRACK:
            const { tx, sx, value } = action.payload;

            _matrix[tx].splice(sx, 1, (value ? 1 : 0));
            state = {
                ...state,
                matrix: _matrix
            };
            break;

        case types.UPDATE_MATRIX_LENGTH:
            _matrix = getUpdatedMatrix(_matrix, action.payload);
            state = {
                ...state,
                matrix: _matrix
            }
            break;

        case types.CLEAR_MATRIX:
            _matrix = getClearMatrix(_matrix);
            state = {
                ...state,
                matrix: _matrix
            }
            break;

        case types.RANDOM_FILL_MATRIX:
                _matrix = getRandomlyFilledMatrix(_matrix);
                state = {
                    ...state,
                    matrix: _matrix
                }
                break;

        default:
            return state;
    }

    return state;
}

export default SequencerTracksReducer;