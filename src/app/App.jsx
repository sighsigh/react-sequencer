import React, { Component } from 'react';

import { Clock }  from './clock';
import { Sequencer }  from './sequencer';
import { StepLogic }  from './steplogic';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock>
          <StepLogic>
            <Sequencer />
          </StepLogic>         
        </Clock>
      </div>
    );
  }
}

export default App;
