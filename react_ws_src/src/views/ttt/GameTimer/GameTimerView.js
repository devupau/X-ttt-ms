import React from "react";

import { formatSeconds } from "./util";

const TurnIcon = ({ nextTurnPly }) => {
  if (nextTurnPly) {
    return <i className="fa fa-times fa-2x" />;
  }
  return <i className="fa fa-circle-o fa-2x" />;
};

const TurnText = ({ nextTurnPly, secondsRemaining }) => {
  if (nextTurnPly) {
    return <p>Make your turn in {formatSeconds(secondsRemaining)}.</p>;
  }

  return (
    <p>
      Opponent has {formatSeconds(secondsRemaining)} left to make their move.
    </p>
  );
};

const GameTimerView = ({ nextTurnPly, secondsRemaining }) => {
  return (
    <div id="game_timer" className="game_timer">
      <TurnIcon nextTurnPly={nextTurnPly} />
      <TurnText nextTurnPly={nextTurnPly} secondsRemaining={secondsRemaining} />
    </div>
  );
};

GameTimerView.propTypes = {
  secondsRemaining: React.PropTypes.number,
  nextTurnPly: React.PropTypes.bool,
};

export default GameTimerView;
