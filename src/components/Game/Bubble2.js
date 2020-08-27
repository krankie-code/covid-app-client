import React, { Component } from "react";
import styles from "./Bubble.css";
import { withRouter } from "react-router-dom";
import virus1 from "../../images/—Pngtree—orange mischief virus cute virus_5341821.png";

class Bubble2 extends Component {
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

  componentDidMount() {
    this.timer = setInterval(this.counter, 10);
  }

  handleClick = () => {
    this.props.stopCounter({
      top: Math.floor(Math.random() * 500),
      left: Math.floor(Math.random() * 200),
    });
  };

  render() {
    if (this.state.count === 400) {
      this.props.stopGame();
    }
    return (
      <div className={styles.bubble}>
        <img
          alt="virus"
          src={virus1}
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

export default withRouter(Bubble2);
