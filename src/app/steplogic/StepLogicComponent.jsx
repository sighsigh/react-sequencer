import React, { Component, Fragment } from 'react';

class StepLogicComponent extends Component {
    constructor(props) {
        super(props);

        this.timerId = null;

        this.play = this.play.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
        this.editSteps = this.editSteps.bind(this);
        this.convertBpmToMs = this.convertBpmToMs.bind(this);
        this.onChangeTempo = this.onChangeTempo.bind(this);

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

    editSteps(e) {
        return this.props.changeSteps(e.target.value);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { bpm } = this.props;

        if (prevProps.bpm === bpm) return;
        this.onChangeTempo();
    }

    componentDidMount() {
        // it's invoked immediately after a component is mounted (inserted into the tree). 
        // Initialization that requires DOM nodes should go here. 
        // If you need to load data from a remote endpoint, this is a good place to instantiate the network request.       
    }

    render() {
        const { currentStep, steps } = this.props;

        return (
            <Fragment>
                <div className="cmp-block six columns">
                    <h6>SEQUENCE CONTROLS</h6>

                    <button className="fa fa-play" onClick={this.play}></button>
                    <button className="fa fa-stop" onClick={this.stop}></button>
                    <button className="fa fa-times" onClick={this.reset}></button>

                    <div className="sequencer__steps">
                        <strong>Step:</strong> {`${currentStep + 1} / ${steps}`}
                        <br />
                        <strong>Step quantity:</strong> <input type="number" max="16" value={steps} onChange={this.editSteps} />
                    </div>
                </div>

                {this.props.children}
            </Fragment>
        )
    }
}
  
export default StepLogicComponent;