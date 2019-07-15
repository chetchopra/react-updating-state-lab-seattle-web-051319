import React, { Component } from 'react';

export default class DigitalClicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timesClicked: 0
    }
  }

  manageOnClick = () => {
    let newVal = this.state.timesClicked + 1;
    this.setState({timesClicked: newVal})
  }

  render() {
    return (
      <button onClick={this.manageOnClick}>{this.state.timesClicked}</button>
    )
  }
}
