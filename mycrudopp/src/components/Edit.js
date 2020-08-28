import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import {
  FormBuilder,
  FieldGroup,
  FieldControl,
  Validators,
} from "react-reactive-form";

const TextInput = ({ handler, touched, hasError, meta }) => (
  <div>
    <input placeholder={`Enter ${meta.label}`} {...handler()} />
    <span>
      {touched && hasError("required") && `${meta.label} is required`}
    </span>
  </div>
);

export class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }
  loginForm = FormBuilder.group({
    fname: ["", Validators.required],
    lname: ["", Validators.required],
    mobile: ["", Validators.required],
    address: ["", Validators.required],
    email: ["", Validators.required],
    password: ["", Validators.required],
  });
  componentDidMount() {
    axios
      .get(
        "http://localhost/mycrudopp_php/edit.php?sid=" +
          this.props.match.params.sid
      )
      .then((response) => {
        this.setState({
          fname: response.data.fname,
          lname: response.data.lname,
          mobile: response.data.mobile,
          address: response.data.address,
          email: response.data.email,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleReset = () => {
    this.loginForm.reset();
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form values", this.loginForm.value);
    axios
      .post(
        "http://localhost/mycrudopp_php/update.php?sid=" +
          this.props.match.params.sid,
        this.loginForm.value
      )
      .then((res) => console.log(res.data), this.setState({ redirect: true }))
      .catch(function (error) {
        console.log(error);
      });
  };
  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/dashboard" />;
    } else {
      return (
        <>
          <div className="container py-3">
            <div className="row">
              <div className="mx-auto col-sm-6">
                <div className="card">
                  <FieldGroup
                    control={this.loginForm}
                    render={({ get, invalid }) => (
                      <form onSubmit={this.handleSubmit}>
                        <div className="card-header">
                          <h4 className="mb-0">User Information</h4>
                        </div>
                        <div className="card-body">
                          <div className="form" role="form">
                            <div className="form-group row">
                              <label className="col-lg-4 col-form-label form-control-label">
                                First name
                              </label>
                              <div className="col-lg-8">
                                <FieldControl
                                  name="fname"
                                  render={TextInput}
                                  meta={{ label: "First name" }}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-lg-4 col-form-label form-control-label">
                                Last name
                              </label>
                              <div className="col-lg-8">
                                <FieldControl
                                  name="lname"
                                  render={TextInput}
                                  meta={{ label: "Last name" }}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-lg-4 col-form-label form-control-label">
                                Mobile
                              </label>
                              <div className="col-lg-8">
                                <FieldControl
                                  name="mobile"
                                  render={TextInput}
                                  meta={{ label: "Mobile" }}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-lg-4 col-form-label form-control-label">
                                Address
                              </label>
                              <div className="col-lg-8">
                                <FieldControl
                                  name="address"
                                  render={TextInput}
                                  meta={{ label: "Address" }}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-lg-4 col-form-label form-control-label">
                                Email
                              </label>
                              <div className="col-lg-8">
                                <FieldControl
                                  name="email"
                                  render={TextInput}
                                  meta={{ label: "Email" }}
                                />
                              </div>
                            </div>
                            <div className="form-btn">
                              <button
                                className="btn btn-danger"
                                type="button"
                                onClick={this.handleReset}
                              >
                                Reset
                              </button>
                              <button
                                className="btn btn-success"
                                type="submit"
                                disabled={invalid}
                              >
                                Update User
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

export default Edit;
