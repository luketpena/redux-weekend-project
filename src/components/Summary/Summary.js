import React, {Component} from 'react';
import {connect} from 'react-redux';

class Inputs extends Component {

  render () {
    return (
      <div>
        <h2>Review Your Feedback</h2>
        <p>Feeling: {this.props.feedback.feeling}</p>
        <p>Understanding: {this.props.feedback.understanding}</p>
        <p>Support: {this.props.feedback.support}</p>
        <p>Comments: {this.props.feedback.comment}</p>
      </div>
    )
  }
}

export default connect(reduxState=>({feedback: reduxState.feedbackReducer}))(Inputs);