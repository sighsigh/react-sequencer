import React, { Component, Fragment } from 'react';

class ClockComponent extends Component {

    render() {
        const delta = 10;
        const { bpm, onIncrementTempo, onDecrementTempo } = this.props;

        return (
            <Fragment>
                <div className="cmp-block six columns">
                    <h6>CLOCK</h6>
                    <div>
                        <button onClick={() => onDecrementTempo(delta)}>-</button>
                        <button>{bpm}</button>
                        <button onClick={() => onIncrementTempo(delta)}>+</button>
                    </div>
                </div>

                {this.props.children}
            </Fragment>
        )
    }
}
  
export default ClockComponent;