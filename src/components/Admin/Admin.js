import React, {Component} from 'react';
import Axios from 'axios';
import FeedbackRow from './FeedbackRow';

class Admin extends Component {

  state = {
    feedback: []
  }

  componentDidMount() {
    this.getFeedback();
  }

  getFeedback = ()=> {
    Axios.get('/feedback').then(response=>{
      console.log(response.data);
      this.fillFeedback(response.data) 
    }).catch(error=>{
      console.log(error);
    })
  }

  fillFeedback = (array)=> {
    this.setState({
      feedback: [...array]
    })
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Feeling</th>
              <th>Understanding</th>
              <th>Support</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {this.state.feedback.map(item=><FeedbackRow key={item.id} feedback={item}/>)}
            {console.log(this.state.feedback)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Admin;