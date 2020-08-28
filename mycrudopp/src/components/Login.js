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

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    };
  }

  loginForm = FormBuilder.group({
    email: ["", Validators.required],
    password: ["", Validators.required],
  });

  
  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost/mycrudopp_php/login.php", this.loginForm.value)
      .then((res) => {
        if (res.data.status === "success") {
          alert(res.data.message);
          this.setState({
            redirect: true,
          });
        } else {
          alert(res.data.message);
        }
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const { redirect } = this.state;
    if (redirect === true) {
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
                          <h4 className="mb-0">Login Information</h4>
                        </div>
                        <div className="card-body">
                          <div className="form" role="form">
                            <div className="form-group row">
                              <label className="col-lg-3 col-form-label form-control-label">
                                Email
                              </label>
                              <div className="col-lg-9">
                                <FieldControl
                                  name="email"
                                  render={TextInput}
                                  meta={{ label: "Email" }}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-lg-3 col-form-label form-control-label">
                                Password
                              </label>
                              <div className="col-lg-9">
                                <FieldControl
                                  name="password"
                                  render={TextInput}
                                  meta={{ label: "Password" }}
                                />
                              </div>
                            </div>
                            <div className="form-btn">
                              <button
                                className="btn btn-primary"
                                type="submit"
                                disabled={invalid}
                              >
                                Login User
                              </button>
                              <br />
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

export default Login;
