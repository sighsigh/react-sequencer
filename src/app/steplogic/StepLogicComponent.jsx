import React, { Component, Fragment } from 'react';

import './StepLogic.css';

class StepLogicComponent extends Component {
    constructor(props) {
        super(props);

        this.timerId = null;

        this.play = this.play.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
        this.convertBpmToMs = this.convertBpmToMs.bind(this);
        this.onChangeTempo = this.onChangeTempo.bind(this);

        this.steps = {
            min: 2,
            max: 16
        }

        this.state = {
            isPlaying: false
        }
    }

    convertBpmToMs(bpm) {
        return 60000 / bpm;
    }

    onChangeTempo() {
        const itWasPlaying = this.state.isPlaying;

        this.stop();
        if (itWasPlaying) this.play();
    }

    play() {
        const { bpm, playSequence, stepSequence } = this.props;
        const interval = this.convertBpmToMs(bpm);

        this.timerId = setInterval(stepSequence, interval);
        this.setState({ isPlaying: true });
        playSequence();
    }

    stop() {
        clearInterval(this.timerId);
        this.setState({ isPlaying: false });
        this.props.stopSequence();
    }

    reset() {
        this.stop();
        this.props.resetSequence();
    }

    onIncrementSteps(delta) {
        const { steps, changeSteps } = this.props;
        const resultSteps = steps + delta > this.steps.max ? steps : steps + delta
        return changeSteps(resultSteps);
    }

    onDecrementSteps(delta) {
        const { steps, changeSteps } = this.props;
        const resultSteps = steps - delta < this.steps.min ? steps : steps - delta
        return changeSteps(resultSteps);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { bpm } = this.props;

        if (prevProps.bpm === bpm) return;
        this.onChangeTempo();
    }

    render() {
        const { currentStep, steps } = this.props;

        return (
            <Fragment>
                <div className="cmp-block cmp-steplogic columns four">
                    <h6>SEQUENCE CONTROLS</h6>

                    <div className="cmp-steplogic__controls">
                        <button onClick={this.play}><i className="fa fa-play"></i></button>
                        <button onClick={this.stop}><i className="fa fa-stop"></i></button>
                        <button onClick={this.reset}><i className="fa fa-times"></i></button>

                        <div className="cmp-steplogic__count">
                            <strong>{`${currentStep + 1} / ${steps}`}</strong> 
                        </div>
                        

                   </div>

                    <div className="cmp-steplogic__steps">
                        <button onClick={() => this.onDecrementSteps(1)}><i className="fa fa-chevron-left"></i></button>
                        <span>{steps}</span>
                        <button onClick={() => this.onIncrementSteps(1)}><i className="fa fa-chevron-right"></i></button>
                    </div>
                </div>

                {this.props.children}
            </Fragment>
        )
    }
}
  
export default StepLogicComponent;