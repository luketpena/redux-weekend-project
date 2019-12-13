import React, { Component } from 'react';
import './App.css';
import Inputs from '../Inputs/Inputs';
import Summary from '../Summary/Summary';
import ThankYou from '../ThankYou/ThankYou';
import {connect} from 'react-redux';

class App extends Component {

  state = {
    step: 0
  }

  text = [
    {question: "How are you feeling today?", placeholder: "Feeling?", type: "text", dispatchType: 'IN_FEELING'},
    {question: "How well are you understanding the content?", placeholder: "Understanding?", type: "number", dispatchType: 'IN_UNDERSTANDING'},
    {question: "How well are you being supported?", placeholder: "Support?", type: "number", dispatchType: 'IN_SUPPORT'},
    {question: "Any comments you want to leave?", placeholder: "Comments?", type: "text", dispatchType: 'IN_COMMENT'}
  ]

  changeStep = (val)=> {
    this.setState({
      step: this.state.step+val
    })
  }

  renderSections = ()=> {
    let numberOfInputs = this.text.length;
    if (this.state.step<numberOfInputs) {
      return <Inputs data={this.text[this.state.step]} changeStep={this.changeStep}/>;
    } else {
      switch(this.state.step) {
        case numberOfInputs+0: return <Summary changeStep={this.changeStep}/>;
        case numberOfInputs+1: return <ThankYou resetFeedbackForm={this.resetFeedbackForm}/>;
      }
    }
  }

  resetFeedbackForm = ()=> {
    this.setState({step: 0});
    this.props.dispatch({
      type: 'RESET_FORM'
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
          <p>Reducer: {JSON.stringify(this.props.feedback)}</p>
        </header>
        <br/>

        {this.renderSections()}
      </div>
    );
  }
}

export default connect(reduxState=>({feedback: reduxState.feedbackReducer}))(App);
