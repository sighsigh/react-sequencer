import React from "react";

import {
  Clock as SequencerClock,
  Grid as SequencerGrid,
  Controls as SequencerControls,
} from "@components/index";
import { Container, Grid } from "semantic-ui-react";

import "./App.css";

const App: React.FC = () => {
  return (
    <Container className="app-container">
      <Grid columns="2" stackable>
        <Grid.Row>
          <Grid.Column>
            <SequencerClock />
          </Grid.Column>
          <Grid.Column>
            <SequencerControls />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <SequencerGrid />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default App;
