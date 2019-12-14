import React, {Component} from 'react';
import {connect} from 'react-redux';
import Axios from 'axios';
import Button from '@material-ui/core/Button';

class Inputs extends Component {

  submitFeedback = ()=> {
    
    //Sends the information from the inputs that got stored in the reducer to be sent to the server/db for storage
    Axios.post('/feedback', this.props.feedback).then(response=>{
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
        <Button variant="contained" color="primary" onClick={this.submitFeedback}>Submit</Button>
      </div>
    )
  }
}

export default connect(reduxState=>({feedback: reduxState.feedbackReducer}))(Inputs);