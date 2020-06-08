import React, { Component } from "react";
import Input from "../common/input";
import Joi from "joi-browser";

class LoginForm extends Component {
  //refs refer to the dom object similar to "document.getelements..." in vanila,
  //however, the whole purpose of react is to abstract the document object
  //use only sparingly
  //   username = React.createRef();

  //   componentDidMount() {
  //     console.log("component did mount");
  //     this.username.current.focus();
  //   }

  state = {
    //initialize forms with empty string or value from server to prevent
    //error regarding controlled/uncontrolled elements
    account: { username: "", password: "" },
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

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  //   Less efficient methods without destructuring:

  //   handleChange = (event) => {
  //     const account = { ...this.state.account };
  //     account.username = event.currentTarget.value;
  //     this.setState({ account });
  //   };

  //   handleChange = (event) => {
  //     const account = { ...this.state.account };
  //     account[event.currentTarget.name] = event.currentTarget.value;
  //     this.setState({ account });
  //   };

  validateProperty = ({ name, value }) => {
    //use computed properties (ES6)
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  //   validateProperty = ({ name, value }) => {
  //     if (name === "username") {
  //       if (value.trim() === "") return "Username is required";
  //     }

  //     if (name === "password") {
  //       if (value.trim() === "") return "Password is required";
  //     }
  //   };

  validate = () => {
    const options = {
      abortEarly: false,
    };
    const { error } = Joi.validate(this.state.account, this.schema, options);
    if (!error) return null;

    const errors = {};

    error.details.map((item) => {
      errors[item.path[0]] = item.message;
    });

    return errors;
  };

  //PRE-JOI method:
  //   validate = () => {
  //     const result = Joi.validate(this.state.account, this.schema, {
  //       abortEarly: false,
  //     });
  //     console.log(result);
  //     const errors = {};

  //     const { account } = this.state;
  //     if (account.username.trim() === "")
  //       errors.username = "Username is required.";
  //     if (account.password.trim() === "")
  //       errors.password = "Password is required.";

  //     //returns keys of errors objects to see if it is empty/null
  //     return Object.keys(errors).length === 0 ? null : errors;
  //   };

  handleSubmit = (event) => {
    event.preventDefault();
    //prevents page reload from normal browser function

    const errors = this.validate();

    //errors property should never be null, otherwise, a runtime error will occur because properties of error are being
    //referenced explicitly from the state
    this.setState({
      errors: errors || {},
    });

    //if null, then no value was set and call to server should not happen since return implemented
    if (errors) return;

    //call server
    console.log("Form Submitted");
  };
  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            type="text"
            error={errors.username}
          />

          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            type="password"
            error={errors.password}
          />

          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
