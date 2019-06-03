import React, { Component } from 'react';

import { Clock }  from './clock';
import { SequencerGrid }  from './sequencergrid';
import { StepLogic }  from './steplogic';
import { UserManager }  from './user';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App cmp-container">
        <Clock>
          <StepLogic>
            <SequencerGrid>
              {/* <ChannelFunnel /> */}
              <UserManager />
            </SequencerGrid>
          </StepLogic>         
        </Clock>
      </div>
    );
  }
}

export default App;
