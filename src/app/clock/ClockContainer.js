import { connect } from 'react-redux';
import ClockComponent from './ClockComponent';
import { ClockOperations } from './duck';

const mapStateToProps = (state, ownProps) => {
    const { bpm } = state.clock;

    return {
        bpm
    };
}

const mapDispatchToProps = dispatch => {
    const onIncrementTempo = (delta) => dispatch(ClockOperations.incrementTempo(delta));
    const onDecrementTempo = (delta) => dispatch(ClockOperations.decrementTempo(delta));

    return {
        onIncrementTempo,
        onDecrementTempo
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ClockComponent);