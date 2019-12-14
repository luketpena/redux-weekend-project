import React, {Component} from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';


class FeedbackRow extends Component {

  handleFlagged = ()=> {
    console.log('FLAG');
    
    this.props.putFlag(this.props.feedback.id, !this.props.feedback.flagged);
  }

  render () {
    return (
      <TableRow>
        <TableCell>{this.props.feedback.feeling}</TableCell>
        <TableCell>{this.props.feedback.understanding}</TableCell>
        <TableCell>{this.props.feedback.support}</TableCell>
        <TableCell>{this.props.feedback.comments}</TableCell>
        <TableCell><Radio checked={this.props.feedback.flagged} onClick={this.handleFlagged}/></TableCell>
        <TableCell><Button variant="outlined" color="secondary">Remove</Button></TableCell>
      </TableRow>
    )
  }
}

export default FeedbackRow;