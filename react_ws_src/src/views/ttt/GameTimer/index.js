import React, { Component } from "react";
import TweenMax from "gsap";

import GameTimerView from "./GameTimerView";

const SECONDS_REMAINING = 10;

export default class GameTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsRemaining: SECONDS_REMAINING,
    };

    this.interval = null;
  }

  componentDidMount() {
    this.start_timer();
    TweenMax.from("#game_timer", 1, {
      display: "none",
      opacity: 0,
      scaleX: 0,
      scaleY: 0,
      ease: Power4.easeIn,
    });
  }

  componentWillUnmount() {
    this.clear_timer();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.nextTurnPly != this.props.nextTurnPly) {
      this.clear_timer();
      this.start_timer();
    }
  }

  start_timer() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        secondsRemaining: prevState.secondsRemaining - 1,
      }));
      if (this.state.secondsRemaining == 0) {
        clearInterval(this.interval);
        this.skip_turn();
      }
    }, 1000);
  }

  clear_timer() {
    this.setState({ secondsRemaining: SECONDS_REMAINING });
    clearInterval(this.interval);
    this.interval = null;
  }

  skip_turn() {
    const { gameType, skipTurnComp, skipTurnLive } = this.props;

    if (gameType == "comp") {
      skipTurnComp();
    } else {
      skipTurnLive();
    }
  }

  render() {
    return (
      <GameTimerView
        secondsRemaining={this.state.secondsRemaining}
        nextTurnPly={this.props.nextTurnPly}
      />
    );
  }
}

GameTimer.propTypes = {
  skipTurnComp: React.PropTypes.func,
  skipTurnLive: React.PropTypes.func,
  gameType: React.PropTypes.string,
  nextTurnPly: React.PropTypes.bool,
};
