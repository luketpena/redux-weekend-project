import React, { Component } from 'react';
import './App.css';
import Admin from '../Admin/Admin';
import FeedbackForm from '../FeedbackForm/FeedbackForm';

import { HashRouter as Router, Route } from 'react-router-dom';


class App extends Component {

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Router >
          <Route exact path='/' component={FeedbackForm}/>
          <Route path='/admin' component={Admin}/>
        </Router>
        
      </div>
    );
  }
}

export default App;
