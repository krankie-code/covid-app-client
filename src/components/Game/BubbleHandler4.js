import React, { Component } from "react";
import Bubble4 from "./Bubble4";

export class BubbleHandler4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: true,
      position: {
        top: Math.floor(Math.random() * 500),
        left: Math.floor(Math.random() * 200),
      },
    };
    console.log("I am the constructor of the app js");
  }

  stopCounter = (position) => {
    console.log(position);
    this.setState({ ...this.state, isRunning: false, position: position });
  };

  render() {
    const { isRunning } = this.state;
    console.log(this.props.stopGame);

    return isRunning ? (
      <div>
        <Bubble4
          stopCounter={this.stopCounter}
          style={this.state.position}
          stopGame={this.props.stopGame}
        />
      </div>
    ) : null;
  }
}

export default BubbleHandler4;
