import React, {Component} from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Radio from '@material-ui/core/Radio';

import RemoveButton from './RemoveButton';

class FeedbackRow extends Component {

 
  handleFlagged = ()=> {
    this.props.putFlag(this.props.feedback.id, !this.props.feedback.flagged);
  }

  clickRemove = ()=> {
    this.props.removeFeedback(this.props.feedback.id);
  }

  render () {
    return (
      <TableRow>
        <TableCell>{this.props.feedback.feeling}</TableCell>
        <TableCell>{this.props.feedback.understanding}</TableCell>
        <TableCell>{this.props.feedback.support}</TableCell>
        <TableCell>{this.props.feedback.comments}</TableCell>
        <TableCell><Radio checked={this.props.feedback.flagged} onClick={this.handleFlagged}/></TableCell>
        <TableCell><RemoveButton clickRemove={this.clickRemove}/></TableCell>
      </TableRow>
    )
  }
}

export default FeedbackRow;