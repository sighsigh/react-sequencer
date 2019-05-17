import React, { Component } from 'react';

import { Clock }  from './clock';
import { Sequencer }  from './sequencer';
import { StepLogic }  from './steplogic';
import { UserManager }  from './user';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App cmp-container">
        <Clock>
          <StepLogic>
            <Sequencer>
              {/* <ChannelFunnel /> */}
              <UserManager />
            </Sequencer>
          </StepLogic>         
        </Clock>
      </div>
    );
  }
}

export default App;
