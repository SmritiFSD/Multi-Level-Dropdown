import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {Redirect} from 'react-router'
export default class RecordsList extends Component {
  constructor(props) {
    super(props)
  
    this.delete = this.delete.bind(this);
    this.state = {
      redirect:false
    }
  }
  delete(){
    axios.get("http://localhost/mycrudopp_php/delete.php?sid=" +this.props.obj.sid)
    .then(console.log('Deleted'),
     this.setState({redirect:true}))
    .catch(err => console.log(err))
  }
  render() {
    const {redirect} = this.state;
        if (redirect){
            return <Redirect to='/dashboard' />
        }
    return (
      <>
        <tr>
          <td>{this.props.obj.fname}</td>
          <td>{this.props.obj.lname}</td>
          <td>{this.props.obj.mobile}</td>
          <td>{this.props.obj.address}</td>
          <td>{this.props.obj.email}</td>
          <td><Link to={"/edit/"+this.props.obj.sid} className="btn btn-primary">Edit</Link></td>
          <td><button onClick={this.delete} className="btn btn-danger">Delete</button></td>
        </tr>
      </>
    );
  }
}
