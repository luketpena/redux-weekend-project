import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class RemoveButton extends Component {

  state = {
    step: 0
  }

  toggleStep = ()=> {
    this.setState({step: Math.abs(this.state.step-1)})
  }

  renderButtons = ()=> {
    switch(this.state.step) {
      case 0:
        return <Button onClick={this.toggleStep} variant="outlined" color="secondary">Remove</Button>
      case 1: //props.clickRemove
        return (
          <>
            <Button onClick={this.props.clickRemove} variant="contained" color="secondary">Confirm</Button>
            <Button onClick={this.toggleStep} variant="outlined" color="secondary">Cancel</Button>
          </>
        )
      default: return false;
    }
  }

  render () {
    return (
      <div>
        {this.renderButtons()}
      </div>
    )
  }
}

export default RemoveButton;