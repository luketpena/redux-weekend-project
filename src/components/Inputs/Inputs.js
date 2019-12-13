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

  handleClickNext = (event)=> {
    event.preventDefault();
    this.props.dispatch({
      type: this.props.data.dispatchType,
      payload: this.state.value
    });
    this.props.incrementStep();
    this.setState({
      value: ''
    })
  }

  render () {
    return (
      <form onSubmit={this.handleClickNext}>
        <h2>{this.props.data.question}</h2>
        <input required value={this.state.value} onChange={this.handleChange} type={this.props.data.type} placeholder={this.props.data.placeholder}/>
        <button>Next</button>
      </form>
    )
  }
}

export default connect()(Inputs);