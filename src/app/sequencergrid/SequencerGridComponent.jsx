import React, { Component, Fragment } from 'react';

import Matrix from './Matrix';

import './SequencerGrid.css';

class SequencerComponent extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { steps, updateMatrixLength } = this.props;

        if (prevProps.steps === steps) return;
        updateMatrixLength(steps);
    }

    componentDidMount() {
        const { steps, updateMatrixLength } = this.props;
        updateMatrixLength(steps);
    }

    render() {
        const { steps, addTrack } = this.props;

        return (
            <Fragment>
                <div className="cmp-block cmp-grid twelve columns">
                    <h6>GRID</h6>

                    <div className="cmp-grid__controls">
                        <button
                            onClick={() => addTrack(steps)}>
                            + ADD TRACK
                        </button>

                        <button
                            onClick={() => this.props.clearMatrix()}>
                            CLEAR ALL
                        </button>

                        <button
                            onClick={() => this.props.randomFillMatrix()}>
                            RANDOMIZE
                        </button>
                    </div>  

                    <Matrix {...this.props} />

                </div>

                {this.props.children}
                
            </Fragment>
        )
    }
}

export default SequencerComponent;
