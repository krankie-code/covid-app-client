import React, { Component } from "react";
import styles from "./Bubble.css";
import { withRouter } from "react-router-dom";
import virus4 from "../../images/—Pngtree—yellow virus cartoon covid 19_5386231.png";

class Bubble4 extends Component {
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

  reach50() {
    if (this.state.count === 50) {
      this.setState({
        count: 50,
      });
    }
  }

  render() {
    if (this.state.count === 400) {
      this.props.stopGame();
    }
    return (
      <div className={styles.bubble}>
        <img
          alt="virus"
          src={virus4}
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

export default withRouter(Bubble4);
