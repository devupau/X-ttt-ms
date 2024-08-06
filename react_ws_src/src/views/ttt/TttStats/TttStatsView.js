import React from "react";

export const TttStatsDefaultView = () => {
  return (
    <div className="ttt_stats__default">
      <h2>Player Stats</h2>
      <p>No games recorded. Play your first game to see stats here!</p>
    </div>
  );
};

const TttStatsRowMode = ({ children }) => {
  return (
    <div className="ttt_stats__row-mode">
      <p>{children}</p>
    </div>
  );
};

const TttStatsRow = ({ stats }) => {
  return (
    <div className="ttt_stats__row">
      <div className="ttt_stats__row-header">
        <p>Wins</p>
        <p>Losses</p>
        <p>Draws</p>
      </div>
      <div className="ttt_stats__row-stats">
        <p>{stats.wins}</p>
        <p>{stats.losses}</p>
        <p>{stats.draws}</p>
      </div>
    </div>
  );
};

export const TttStatsView = ({ stats }) => {
  return (
    <div className="ttt_stats">
      <h2>Player Stats</h2>
      <TttStatsRowMode>Computer</TttStatsRowMode>
      <TttStatsRow stats={stats.comp_stats} />

      <TttStatsRowMode>Live</TttStatsRowMode>
      <TttStatsRow stats={stats.live_stats} />
    </div>
  );
};

TttStatsView.propTypes = {
  stats: React.PropTypes.object,
};
