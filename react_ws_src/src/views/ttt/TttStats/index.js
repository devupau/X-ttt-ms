import React, { Component } from "react";

import { playerHasStats } from "./util";

import { TttStatsView, TttStatsDefaultView } from "./TttStatsView";

export default class TttStats extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { stats } = this.props;

    if (!playerHasStats(stats)) {
      return <TttStatsDefaultView />;
    }

    return <TttStatsView stats={stats} />;
  }
}

TttStats.propTypes = {
  stats: React.PropTypes.object,
};
