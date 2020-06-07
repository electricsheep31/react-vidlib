import React, { Component } from "react";
import Input from "../common/input";

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

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
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

  validate = () => {
    return { username: "Username is requried" };
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //prevents page reload from normal browser function

    const errors = this.validate();
    this.setState({
      errors,
    });

    //if null, then no value was set and call to server should not happen since return implemented
    if (errors) return;

    //call server
    console.log("Form Submitted");
  };
  render() {
    const { account } = this.state;
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
          />

          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            type="password"
          />

          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
