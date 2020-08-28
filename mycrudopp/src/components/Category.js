import React, { Component } from "react";
import axios from "axios";
import "../App.css";
// import { Link } from "react-router-dom";
export default class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost/Categories_dropdown/indexx.php")
      .then((res) => {
        console.log(res.data);
        this.setState({ user: res.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  getValue(e) {
    // debugger;
    // console.log(e);
    // this.props.getDropdownId(e.target.value);
    this.props.getDropdownId(e);
  }
  // renderMenu =items=>{
  //   return <select>
  //     {items.map((i,key)=>{
  //       return <option key={key} value={i.id}>
  //         {i.name}
  //         {i.categorieslevelone && this.renderMenu(i.categorieslevelone)}
  //       </option>
  //     })}
  //   </select>
  // }
  //   renderMenu =items=>{
  //   return <ul>
  //     {items.map((i,key)=>{
  //       return <li key={key} >
  //         <Link  to={i.id} className="menu" onClick={this.getValue(i.id)}>{i.name}</Link>
  //            {i.categorieslevelone && this.renderMenu(i.categorieslevelone)}
  //       </li>
  //     })}
  //   </ul>
  // }
  // Menu = () =>{
  //   return <nav>{this.renderMenu(this.state.user)}</nav>
  // }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="mx-auto">
            <div className="card">
              <div className="select-boxes">
                <select
                  className="select"
                  name="category"
                  onChange={(e) => this.getValue(e)}
                >
                  <option value="0">{this.props.optionText}</option>
                  {this.state.user.map((e, key) => {
                    return (
                      <option key={key} value={e.id}>
                        {e.name}
                      </option>
                    );
                  })}
                </select>
                {/* {this.Menu()} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
