import React, { Component } from 'react';
import './App.css';
import Inputs from '../Inputs/Inputs';
import Summary from '../Summary/Summary';

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

  incrementStep = ()=> {
    this.setState({
      step: this.state.step+1
    })
  }

  renderSections = ()=> {
    if (this.state.step<this.text.length) {
      return <Inputs data={this.text[this.state.step]} incrementStep={this.incrementStep}/>
    } else {
      return <Summary />
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>

        {this.renderSections()}
      </div>
    );
  }
}

export default App;
