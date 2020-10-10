import React, { Component, Fragment } from 'react';

import './StepLogic.css';

class StepLogicComponent extends Component {
    constructor(props) {
        super(props);

        this.timerId = null;

        this.play = this.play.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
        this.setTick = this.setTick.bind(this);
        this.onChangeTempo = this.onChangeTempo.bind(this);

        this.settings = {
            steps: {
                min: 2,
                max: 16
            }
        }

    }

    onChangeTempo() {
        if (this.props.isPlaying) {
            this.stop();
            this.play();
        };
    }

    play() {
        this.setTick();
        this.props.playSequence();
    }

    setTick() {
        const { stepSequence, tempoInMs } = this.props;
        clearInterval(this.timerId);
        this.timerId = setInterval(stepSequence, tempoInMs);
    }

    stop() {
        clearInterval(this.timerId);
        this.props.stopSequence();
    }

    reset() {
        this.stop();
        this.props.resetSequence();
    }

    onIncrementSteps(delta) {
        const { steps, changeSteps } = this.props;
        const resultSteps = steps + delta > this.settings.steps.max ? steps : steps + delta
        return changeSteps(resultSteps);
    }

    onDecrementSteps(delta) {
        const { steps, currentStep, changeSteps, changeCurrentStep } = this.props;
        const resultSteps = steps - delta < this.settings.steps.min ? steps : steps - delta;
        if ((currentStep + 1) === steps) {
            changeCurrentStep(currentStep - 1);
        }
        changeSteps(resultSteps);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { tempoInMs } = this.props;

        if (prevProps.tempoInMs === tempoInMs) return;
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
                        <button onClick={this.stop}><i className="fa fa-pause"></i></button>
                        <button onClick={this.reset}><i className="fa fa-stop"></i></button>

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