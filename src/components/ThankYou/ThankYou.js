import React, {Component} from 'react';
import {connect} from 'react-redux';

class Inputs extends Component {

  render () {
    return (
      <div>
        <h2>Thank You!</h2>
        <button onClick={this.props.resetFeedbackForm}>Leave New Feedback</button>
      </div>
    )
  }
}

export default Inputs;