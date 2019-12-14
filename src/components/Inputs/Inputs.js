import React, {Component} from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

  renderBackButton = ()=> {
    if (this.props.step>0) {
      return <Button variant="contained" onClick={(event)=>this.handleClickNext(event,-1)}>Back</Button>
    }
  }

  render () {
    
    return (
      <div>
        <h2>{this.props.data.question}</h2>
        <form onSubmit={(event)=>this.handleClickNext(event,1)}>
                   
          <TextField required value={this.state.value} onChange={this.handleChange} type={this.props.data.type} label={this.props.data.placeholder}/>
          <Button type="submit" variant="contained" color="primary">Next</Button>
          
        </form>
        <div className="btn-back">
        {this.renderBackButton()}
        </div>
      </div>
    )
  }
}

export default connect(reduxState=>({feedback: reduxState.feedbackReducer}))(Inputs);