import React, { Component } from "react";
import "./App.css";
import User from "./User";

class App extends Component {
  onChangeState = () => {
    this.setState({ name: "Johngalt" });
  };

  unmountChild = () => {
    this.setState({ name: "roark" });
  };

  // 1
  constructor() {
    super();
    this.state = {
      name: "Umesh"
    };
    console.log("Constructor method");
  }
  // 2
  UNSAFE_componentWillMount() {
    if (window.innerWidth < 500) {
      this.setState({ innerWidth: window.innerWidth });
    }
    console.log("ComponentWillMount");
  }

  // 3
  render() {
    console.log("Render method");
    if (this.state.name === "roark") {
      return <div></div>;
    }
    return (
      <div className="App">
        <h2>Home Page</h2>
        Name: {this.state.name} <br />
        InnerWidth : {this.state.innerWidth}
        <User name={this.state.name}></User>
        <br />
        <button onClick={this.onChangeState} className="btn btn-primary mr-1">
          Change State
        </button>
        <button className="btn btn-danger" onClick={this.unmountChild}>
          Unmount Child
        </button>
      </div>
    );
  }

  // 4
  componentDidMount() {
    console.log("ComponentDidMount");
  }

  // 5

  UNSAFE_componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }

  // 6

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  // 7

  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  // 8
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    console.log(prevProps);
    console.log(prevState);
  }

  // 9
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}

export default App;
