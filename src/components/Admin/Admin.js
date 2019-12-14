import React, {Component} from 'react';
import Axios from 'axios';
import FeedbackRow from './FeedbackRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class Admin extends Component {

  state = {
    feedback: []
  }

  componentDidMount() {
    //Trigger an axios request on mount
    this.getFeedback();
  }

  getFeedback = ()=> {
    //Making a request to the router for all of the feedback in the database
    Axios.get('/feedback').then(response=>{
      this.fillFeedback(response.data) 
    }).catch(error=>{
      console.log(error);
    })
  }

  fillFeedback = (array)=> {
    //Copies any array into our state
    
    this.setState({
      feedback: [...array]
    })
  }

  putFlag = (id, val)=> {
    Axios.put('/feedback/flag/'+id, {val}).then(response=>{
      this.getFeedback();
    }).catch(error=>{
      console.log(error);      
    })
  }

  render() {
    return (
      <div className="feedbackBox">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Feeling</TableCell>
              <TableCell>Understanding</TableCell>
              <TableCell>Support</TableCell>
              <TableCell>Comments</TableCell>
              <TableCell>Flag</TableCell>
              <TableCell>&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.feedback.map(item=><FeedbackRow key={item.id} feedback={item} putFlag={this.putFlag}/>)}
          </TableBody>
        </Table>
      </div>
    )
  }
}

export default Admin;