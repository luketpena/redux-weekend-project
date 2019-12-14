import React, {Component} from 'react';
import Inputs from '../Inputs/Inputs';
import Summary from '../Summary/Summary';
import ThankYou from '../ThankYou/ThankYou';

import {connect} from 'react-redux';

class FeedbackForm extends Component {

  state = {
    step: 0
  }

  //Each feedback form step is the same component that is customized with the info from this array
  text = [
    {question: "How are you feeling today?", placeholder: "Feeling?", type: "number", dispatchType: 'IN_FEELING', startVal: this.props.feedback.feeling, propName: 'feeling'},
    {question: "How well are you understanding the content?", placeholder: "Understanding?", type: "number", dispatchType: 'IN_UNDERSTANDING', startVal: this.props.feedback.understanding, propName: 'understanding'},
    {question: "How well are you being supported?", placeholder: "Support?", type: "number", dispatchType: 'IN_SUPPORT', startVal: this.props.feedback.support, propName: 'support'},
    {question: "Any comments you want to leave?", placeholder: "Comments?", type: "text", dispatchType: 'IN_COMMENT', startVal: this.props.feedback.comments, propName: 'comments'}
  ]

  //Changes the current step we are on, limiting it to the scope of the application
  changeStep = (val)=> {
    this.setState({
      step: this.state.step+val
    })
  }

  //This function is what draws the various steps of the Feedback Form onto the DOM
  renderSections = ()=> {

    //This sets how many questions we are expecting to ask
    //This would allow this feedback component to be expanded easily, without relying on magic numbers
    let numberOfInputs = this.text.length;

    //This renders input steps OR the steps beyond that
    if (this.state.step<numberOfInputs) {
      //Reset the starting value of the input form to reflect the saved value in the reducer for that form
      let target = this.text[this.state.step];
      target.startVal = this.props.feedback[target.propName]
      //Return the input component with the correct information
      return <Inputs data={target} changeStep={this.changeStep} step={this.state.step}/>;

    } else {

      //This handles all steps beyond the numberOfInputs based on the questions asked by this.text
      switch(this.state.step) {
        case numberOfInputs+0: return <Summary changeStep={this.changeStep}/>;
        case numberOfInputs+1: return <ThankYou resetFeedbackForm={this.resetFeedbackForm}/>;
        default: return <p>Whoopsie. You shouldn't be seeing this. My bad.</p>

      }
    }
  }

  //Simple: reset our steps and trigger the reducer storing the input to empty
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