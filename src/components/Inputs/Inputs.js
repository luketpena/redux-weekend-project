import React, {Component} from 'react';
import {connect} from 'react-redux';

class Inputs extends Component {

  state = {
    value: ''
  }

  handleChange = (event)=> {
    this.setState({
      value: event.target.value
    });
  }

  render () {
    return (
      <div>
        <h2>{this.props.data.question}</h2>
        <input value={this.state.value} onChange={this.handleChange} type={this.props.data.type} placeholder={this.props.data.placeholder}/>
        <button>Next</button>
      </div>
    )
  }
}

export default connect()(Inputs);