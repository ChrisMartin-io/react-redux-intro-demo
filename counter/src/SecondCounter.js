import React, { Component } from "react";
import { connect } from "react-redux";

class SecondCounter extends Component {
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
        <h2>Count is: {this.props.count}</h2>
        <button
          onClick={this.up}> + </button>
        <button
          onClick={this.down}> - </button>
      </div>
    );
  }
}
// end

// Place redux state onto react props ---
// this function runs every time 
// an action is dispatched!

function mapStateToProps(state) {
  return { count: state.count };
}

const connectToState = 
  connect(mapStateToProps);

export default connectToState(SecondCounter);
