import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  doSubmit = () => {
    //call server
    console.log("Registration Form Submitted");
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("Username", "username", "autofocus")}
          {this.renderInput("Password", "password", null, "password")}
          {this.renderInput("Name", "name", null)}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
