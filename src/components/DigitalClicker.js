// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
  // when handleClick is called, newCount is set to whatever this.state.count is plus 1 PRIOR to calling this.setState
  let newCount = this.state.timesClicked + 1
  this.setState({
    timesClicked: newCount
  })
}

  render(){
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
}
