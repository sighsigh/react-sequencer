import { combineReducers } from 'redux';
import ClockReducers from './app/clock/duck';
import SequencerGridReducers from './app/sequencergrid/duck';
import StepLogicReducers from './app/steplogic/duck';

const rootReducer = combineReducers({
    clock: ClockReducers,
    sequencer_grid: SequencerGridReducers,
    steplogic: StepLogicReducers
});

export default rootReducer;