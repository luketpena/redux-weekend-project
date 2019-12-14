import React, {Component} from 'react';
import Inputs from '../Inputs/Inputs';
import Summary from '../Summary/Summary';
import ThankYou from '../ThankYou/ThankYou';

import {connect} from 'react-redux';

class FeedbackForm extends Component {

  state = {
    step: 0
  }

  text = [
    {question: "How are you feeling today?", placeholder: "Feeling?", type: "number", dispatchType: 'IN_FEELING', startVal: this.props.feedback.feeling},
    {question: "How well are you understanding the content?", placeholder: "Understanding?", type: "number", dispatchType: 'IN_UNDERSTANDING', startVal: this.props.feedback.understanding},
    {question: "How well are you being supported?", placeholder: "Support?", type: "number", dispatchType: 'IN_SUPPORT', startVal: this.props.feedback.support},
    {question: "Any comments you want to leave?", placeholder: "Comments?", type: "text", dispatchType: 'IN_COMMENT', startVal: this.props.feedback.comments}
  ]

  

  changeStep = (val)=> {
    
    this.setState({
      step: this.state.step+val
    })
  }

  renderSections = ()=> {
    let numberOfInputs = this.text.length;
    if (this.state.step<numberOfInputs) {

      switch(this.state.step) {
        case 0: this.text[0].startVal = this.props.feedback.feeling; break;
        case 1: this.text[1].startVal = this.props.feedback.understanding; break;
        case 2: this.text[2].startVal = this.props.feedback.support; break;
        case 3: this.text[3].startVal = this.props.feedback.comments; break;
        default: return false;
      }
      
      return <Inputs data={this.text[this.state.step]} changeStep={this.changeStep}/>;
    } else {
      switch(this.state.step) {
        case numberOfInputs+0: return <Summary changeStep={this.changeStep}/>;
        case numberOfInputs+1: return <ThankYou resetFeedbackForm={this.resetFeedbackForm}/>;
        default: return <p>Whoopsie. You shouldn't be seeing this. My bad.</p>
      }
    }
  }

  resetFeedbackForm = ()=> {
    this.setState({step: 0});
    this.props.dispatch({
      type: 'RESET_FORM'
    })
  }

  render () {
    return (
      <div>
        <p>Reducer: {JSON.stringify(this.props.feedback)}</p>
        {this.renderSections()}
      </div>
    )
  }
}

export default connect(reduxState=>({feedback: reduxState.feedbackReducer}))(FeedbackForm);