import { combineReducers } from "redux";
import ClockReducers from "./clock/duck";
import SequencerGridReducers from "./sequencergrid/duck";
import StepLogicReducers from "./steplogic/duck";

const rootReducer = combineReducers({
  clock: ClockReducers,
  sequencer_grid: SequencerGridReducers,
  steplogic: StepLogicReducers,
});

export default rootReducer;
