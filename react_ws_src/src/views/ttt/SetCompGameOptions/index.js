import React, { Component } from "react";

// Computer game options
import SizeOption from "./options/SizeOption";

class SetCompGameOptions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { size } = this.props.options;
    const { updOptions } = this.props;

    return (
      <div className="ttt-comp-opts">
        <h2>Computer game options</h2>
        <SizeOption updater={updOptions} selectedVal={size} />
      </div>
    );
  }
}

export default SetCompGameOptions;
