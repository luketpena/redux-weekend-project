import React, {Component} from 'react';
import {connect} from 'react-redux';

class Inputs extends Component {

  render () {
    return (
      <div>
        <h2>Review Your Feedback</h2>
        
      </div>
    )
  }
}

export default connect(reduxState=>({feedback: reduxState.feedbackReducer}))(Inputs);