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
                    <div className="cmp-grid" key={`track-${i}`}>
                        <div className="index">{i + 1}</div>

                        { track.map((slot, j) => {
                            return (
                                /* Cell */
                                <span 
                                    key={`cell-${track[i]}-${j}`} 
                                    className={`cmp-grid__cell ${slot ? "active" : ""}`}
                                    onClick={() => updateTrack({trackIndex: i, slotIndex: j, value: !slot})} />
                            )
                        }) }

                        {/* Delete Track */}
                        { matrix.length > 1
                                ? <button 
                                        className="cmp-grid__cell--remove"
                                        onClick={() => deleteTrack(trackInx)}><i className="fa fa-trash"></i></button>
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
            <div>
                <div className="cmp-matrix">
                    { this.renderGrid(matrix) }

                    <div className="cmp-matrix__cursor"
                        style={{left: `${currentStep * 30}px`}} />
                </div>
            </div>
        )
    }
}
  
export default Matrix;