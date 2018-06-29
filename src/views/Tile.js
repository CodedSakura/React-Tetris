import React, {Component} from "react";

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      t: false
    };
    this.click = this.click.bind(this);
  }

  click() {
    this.setState(state => ({t: !state.t}));
  }

  render() {
    return (
      <div className="tile" style={{backgroundColor: this.state.t ? "magenta" : undefined}} onClick={this.click}/>
    );
  }
}

export default Tile;