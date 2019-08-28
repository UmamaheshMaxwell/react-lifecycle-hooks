import React, { Component } from "react";

export default class User extends Component {
  constructor() {
    super();
    console.log("Child Constructor method");
  }
  UNSAFE_componentWillMount() {
    console.log("Child Component will mount");
  }

  render() {
    console.log("Child Render method");
    return (
      <div>
        <h2>Child has got a value : {this.props.name}</h2>
      </div>
    );
  }

  componentDidMount() {
    console.log("Child Component did mount");
  }

  UNSAFE_componentWillReceiveProps() {
    console.log("child componentWillReceiveProps");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("child shouldComponentUpdate");
    return true;
  }

  UNSAFE_componentWillUpdate() {
    console.log("child componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("child componentDidUpdate");
    console.log(`child prevProps`, `${prevProps}`);
    console.log(`cild prevState`, `${prevState}`);
  }

  componentWillUnmount() {
    console.log("child componentWillUnmount");
  }
}
