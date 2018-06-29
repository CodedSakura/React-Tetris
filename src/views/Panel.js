import React, {Component} from "react";
import {Button} from "reactstrap";
import Tile from "./Tile";

class Panel extends Component {
  render() {
    return (
      <div className="panel">
        <div className="buttons">
          <Button>New Game</Button>
          <Button>Pause</Button>
          <Button>HighScores</Button>
        </div>
        <div className="next-up">
          <div className="n-row"><Tile/><Tile/><Tile/><Tile/></div>
          <div className="n-row"><Tile/><Tile/><Tile/><Tile/></div>
          <div className="n-row"><Tile/><Tile/><Tile/><Tile/></div>
        </div>
        <div className="score">
          1337
        </div>
        <div className="controls">
          ↑↑↓↓←→←→AB
        </div>
      </div>
    );
  }
}

export default Panel;