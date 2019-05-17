import React, { Component, Fragment } from 'react';

import Matrix from './Matrix';

import './Sequencer.css';

class SequencerComponent extends Component {
    constructor(props) {
        super(props);
        this.createMatrix = this.createMatrix.bind(this);
        this.addTrackToGrid = this.addTrackToGrid.bind(this);
    }

    createMatrix(rows, cols) {
        const matrix = [];

        for (let i=0; i<rows; i++) {
            matrix.push(new Array(cols).fill(0))
        }

        this.setState({
            matrix
        })
    }

    addTrackToGrid() {
        const { steps, addTrack } = this.props;
        addTrack(steps);
    }

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
        return (
            <Fragment>
                <div className="cmp-block cmp-grid twelve columns">
                    <h6>GRID</h6>

                    <div className="cmp-grid__controls">
                        <button
                            onClick={() => this.addTrackToGrid()}>
                            + ADD TRACK
                        </button>

                        <button
                            onClick={() => this.props.clearMatrix()}>
                            CLEAR ALL
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