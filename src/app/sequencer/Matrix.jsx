import React, { Component } from 'react';

class Matrix extends Component {
    constructor(props) {
        super(props);

        this.renderGrid = this.renderGrid.bind(this);
    }

    renderGrid(matrix) {
        const { updateTrack, deleteTrack } = this.props;

        return (
            matrix.map((track, i) => {
                const trackInx = i;
                return (
                    /* Track */
                    <div className="sequencer__grid" key={`track-${i}`}> 
                        { track.map((slot, j) => {
                            return (
                                /* Cell */
                                <span 
                                    key={`cell-${track[i]}-${j}`} 
                                    className={`sequencer__grid-cell ${slot ? "active" : ""}`}
                                    onClick={() => updateTrack({trackIndex: i, slotIndex: j, value: !slot})} />
                            )
                        }) }

                        {/* Delete Track */}
                        { matrix.length > 1
                                ? <button 
                                        className="remove__grid-cell"
                                        onClick={() => deleteTrack(trackInx)}>  X  </button>
                                : ''
                        }
                    </div>
                    )
                }
            )
        )
    }

    render() {
        const { currentStep, matrix } = this.props;

        return (
            <div className="sequencer__grid-container">

                { this.renderGrid(matrix) }

                <div className="sequencer__cursor"
                    style={{left: `${currentStep * 30}px`}} />
            </div>
        )
    }
}
  
export default Matrix;