import { connect } from 'react-redux';
import UserComponent from './UserManagerComponent';

const mapStateToProps = (state, ownProps) => {
    const { currentStep } = state.steplogic;
    const { matrix, tracksNum } = state.sequencer;

    return {
        currentStep,
        matrix,
        tracksNum
    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserComponent);