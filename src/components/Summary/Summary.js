import React, {Component} from 'react';
import {connect} from 'react-redux';
import Axios from 'axios';

class Inputs extends Component {

  submitFeedback = ()=> {

    let newFeedback = {...this.props.feedback};  
    
    Axios.post('/feedback', newFeedback).then(response=>{
      this.props.changeStep(1);
    }).catch(error=>{
      console.log(error);      
    })
  }

  render () {
    return (
      <div>
        <h2>Review Your Feedback</h2>
        <p>Feeling: {this.props.feedback.feeling}</p>
        <p>Understanding: {this.props.feedback.understanding}</p>
        <p>Support: {this.props.feedback.support}</p>
        <p>Comments: {this.props.feedback.comments}</p>
        <button onClick={this.submitFeedback}>Submit</button>
      </div>
    )
  }
}

export default connect(reduxState=>({feedback: reduxState.feedbackReducer}))(Inputs);