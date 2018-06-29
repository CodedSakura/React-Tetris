import React, { Component } from 'react';
import {Container} from "reactstrap";
import './SCSS/App.css';
import Panel from "./views/Panel";
import Grid from "./views/Grid";

class App extends Component {
  render() {
    return (
      <Container className="game">
        <div className="field">
          <Grid/>
          <Panel/>
        </div>
      </Container>
    );
  }
}

export default App;
