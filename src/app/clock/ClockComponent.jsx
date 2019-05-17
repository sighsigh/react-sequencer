import React, { Component, Fragment } from 'react';

import './Clock.css';

class ClockComponent extends Component {

    render() {
        const delta = 10;
        const { bpm, onIncrementTempo, onDecrementTempo } = this.props;

        return (
            <Fragment>
                <div className="cmp-block cmp-clock columns four">
                    <h6>CLOCK</h6>
                    <div className="cmp-clock__controls">
                        <button onClick={() => onDecrementTempo(delta)}><i className="fa fa-minus"></i></button>
                        <span>{bpm} BPM</span>
                        <button onClick={() => onIncrementTempo(delta)}><i className="fa fa-plus"></i></button>
                    </div>
                </div>

                {this.props.children}
            </Fragment>
        )
    }
}
  
export default ClockComponent;