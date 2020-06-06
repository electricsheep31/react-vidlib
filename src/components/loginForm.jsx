import React, { Component } from "react";

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
    account: { username: "", password: "" },
  };

  handleChange = (event) => {
    const account = { ...this.state.account };
    account.username = event.currentTarget.value;
    this.setState({ account });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //prevents page reload from normal browser function

    console.log("Submitted");
    console.log(this.username);
  };
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              value={this.state.account.username}
              onChange={this.handleChange}
              autoFocus
              //   ref={this.username}
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" className="form-control" />
          </div>

          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
