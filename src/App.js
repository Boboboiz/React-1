import React, { Component } from "react";
import Home from "./classEx6/Home";
// import Demo1 from "./demoLifeCycle/Demo1";

class App extends Component {
  // state = {
  //   count2: 0,
  //   countApp_2: 10,
  // };
  // increaseCount2 = () => {
  //   this.setState({
  //     count2: this.state.count2 + 1,
  //   });
  // };
  render() {
    return (
      <div className="App p-5">
        {/* <Demo1 item={this.state.count2}/>
        <h1> Count2:{this.state.count2}</h1>
        <button onClick={this.increaseCount2}>Count2</button> */}
        <Home />
      </div>
    );
  }
}
export default App;
