import React, { Component } from "react";
import { connect } from "react-redux";

class FirstCounter extends Component {
  constructor(props) {
    super(props);
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
  }

  up() { this.props.dispatch({ type: "INCREMENT" }); }
  down() { this.props.dispatch({ type: "DECREMENT" }); }

  render() {
    return (
      <div>
        <button onClick={this.up}> + </button>
        <button onClick={this.down}> - </button>
      </div>
    );
  }
}

export default connect()(FirstCounter);
