import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username")
      .error(() => {
        return { message: "Username is required." };
      }),
    password: Joi.string()
      .required()
      .label("Password")
      .error(() => {
        return { message: "Password is required." };
      }),
  };

  doSubmit = () => {
    //call server
    console.log("Login Form Submitted");
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("Username", "username")}
          {this.renderInput("Password", "password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
