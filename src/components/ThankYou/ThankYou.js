import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';

class Inputs extends Component {

  render () {
    return (
      <div>
        <h2>Thank You!</h2>
        <Fab variant="extended" color="secondary" onClick={this.props.resetFeedbackForm}>Leave New Feedback</Fab>
      </div>
    )
  }
}

export default Inputs;