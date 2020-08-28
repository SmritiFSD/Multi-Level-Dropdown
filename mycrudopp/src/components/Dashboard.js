import React, { Component } from "react";
import axios from "axios";
import RecordsList from "./RecordsList";
export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost/mycrudopp_php/view.php")

      .then((res) => {
        // console.log(res.data,"All Data")
        this.setState({ user: res.data });
      })
      .catch(function (error) {
        console.log(error);
      });

    //    console.log(this.state.user)
  }

  userLists() {
    return this.state.user.map(function (object, i) {
      return <RecordsList obj={object} key={i} />;
    });
  }
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="mx-auto">
            <div className="card">
              <table className="table">
                <thead className="black">
                  <tr className="white-text">
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Address</th>
                    <th scope="col">Email</th>
                    <th scope="col" colSpan="3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>{this.userLists()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    ); 
  }
}
