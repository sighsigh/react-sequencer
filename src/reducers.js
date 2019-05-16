import { combineReducers } from 'redux';
import ClockReducers from './app/clock/duck';
import SequencerReducers from './app/sequencer/duck';
import StepLogicReducers from './app/steplogic/duck';

const rootReducer = combineReducers({
    clock: ClockReducers,
    sequencer: SequencerReducers,
    steplogic: StepLogicReducers
});

export default rootReducer;