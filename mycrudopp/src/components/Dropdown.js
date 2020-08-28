import React, { Component } from "react";
import axios from "axios";
import {
  FormBuilder,
  FieldGroup,
  FieldControl,
  Validators,
} from "react-reactive-form";
import Category from "./Category";
const TextInput = ({ handler, touched, hasError, meta }) => (
  <div>
    <input placeholder={`Enter ${meta.label}`} {...handler()} />
    <span>
      {touched && hasError("required") && `${meta.label} is required`}
    </span>
  </div>
);
export default class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parent_id: "",
      id: "",
    };
  }

  loginForm = FormBuilder.group({
    name: ["", Validators.required],
  });

  getId = (value) => {
    console.log(value, "abcd");
    this.setState({ id: value });
  };
  handleReset = () => {
    this.loginForm.reset();
  };
  handleSubmit = (e) => {
    // e.preventDefault();

    console.log("Form values", this.loginForm.value.name);
    var obj = {
      parent_id: this.state.id,
      name: this.loginForm.value.name,
    };
    axios
      .post("http://localhost/Categories_dropdown/insert.php", obj)
      .then((res) => {
        // console.log(res.data);
        this.setState();
      })
      .catch(function (error) {
        console.log(error);
      });
    e.target.reset();
    this.loginForm.reset();
  };

  render() {
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
                        <h4 className="mb-0">Category Dropdown</h4>
                      </div>
                      <div className="card-body">
                        <div className="form" role="form">
                          <div className="form-group row">
                            <label className="col-lg-4 col-form-label form-control-label">
                              Select Categoryid
                            </label>
                            <div className="col-lg-8">
                              <Category
                                name="parent_id"
                                optionText={"Parent"}
                                getDropdownId={this.getId}
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-lg-4 col-form-label form-control-label">
                              Category name
                            </label>
                            <div className="col-lg-8">
                              <FieldControl
                                name="name"
                                render={TextInput}
                                meta={{ label: "Category Name" }}
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
                              className="btn btn-primary"
                              type="submit"
                              disabled={invalid}
                            >
                              Submit
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
