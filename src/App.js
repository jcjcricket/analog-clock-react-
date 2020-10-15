import React, { Component } from 'react';
import AnalogDisplay from './analog-display';

export default class App extends Component {
  state = {
    currentTime: new Date(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      currentTime: new Date(),
    });
  }

  render() {
    return <AnalogDisplay time={this.state.currentTime} />;
  }
}
