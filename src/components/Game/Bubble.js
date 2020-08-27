import React, { Component } from "react";
import styles from "./Bubble.css";
import virus2 from "../../images/—Pngtree—corona virus cartoon vector illustration_5336379.png";

class Bubble extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  counter = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  handleClick = () => {
    this.props.stopCounter({
      top: Math.floor(Math.random() * 500),
      left: Math.floor(Math.random() * 200),
    });
  };
  componentDidMount() {
    this.timer = setInterval(this.counter, 10);
  }

  render() {
    if (this.state.count === 400) {
      this.props.stopGame();
    }
    return (
      <div className={styles.bubble}>
        <img
          alt="virus"
          src={virus2}
          className="bubble"
          style={{
            width: `${this.state.count}px`,
            height: `${this.state.count}px`,
            top: `${this.props.style.top}px`,
            left: `${this.props.style.left}px`,
          }}
          onClick={() => this.handleClick()}
        ></img>
      </div>
    );
  }
}

export default Bubble;
