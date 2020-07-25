import React, { Component } from "react";
import FirstCounter from "./FirstCounter";
import SecondCounter from "./SecondCounter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FirstCounter />
        <SecondCounter />
      </div>
    );
  }
}

export default App;
