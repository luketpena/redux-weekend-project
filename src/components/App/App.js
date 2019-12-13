import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Inputs from '../Inputs/Inputs';

class App extends Component {

  state = {
    step: 0
  }

  text = [
    {question: "How are you feeling today?", placeholder: "Feeling?", type: "text"},
    {question: "How well are you understanding the content?", placeholder: "Understanding?", type: "number"},
    {question: "How well are you being supported?", placeholder: "Support?", type: "number"},
    {question: "Any comments you want to leave?", placeholder: "Feeling?", type: "text"}
  ]

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Inputs data={this.text[this.state.step]}/>
      </div>
    );
  }
}

export default App;
