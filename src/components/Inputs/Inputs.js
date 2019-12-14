import React, {Component} from 'react';
import {connect} from 'react-redux';

class Inputs extends Component {

  state = {
    value: '',
    refill: false
  }

  handleChange = (event)=> {
    this.setState({ value: event.target.value });
  }

  handleClickNext = (event,stepChange)=> {
    event.preventDefault();
    let valToSend = this.state.value;
    this.props.dispatch({
      type: this.props.data.dispatchType,
      payload: valToSend
    });
    this.props.changeStep(stepChange);
    this.setState({
      value: '',
      refill: false
    })
  }

  componentDidUpdate () {
    if (!this.state.refill && !this.state.value) {
      
      this.setState({
        value: this.props.data.startVal,
        refill: true
      })
    }
  }




  render () {

    return (
      <div>
        <form onSubmit={(event)=>this.handleClickNext(event,1)}>
          <h2>{this.props.data.question}</h2>
          
          <input required value={this.state.value} onChange={this.handleChange} type={this.props.data.type} placeholder={this.props.data.placeholder}/>
          <button>Next</button>
          
        </form>
        <button onClick={(event)=>this.handleClickNext(event,-1)}>Back</button>
      </div>
    )
  }
}

export default connect(reduxState=>({feedback: reduxState.feedbackReducer}))(Inputs);