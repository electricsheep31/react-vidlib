import React, { Component } from "react";

class MovieForm extends Component {
  handleSave = () => {
    this.props.history.replace("/movies");
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Movie Form {this.props.match.params.id}</h1>
            <button onClick={this.handleSave} className="btn-primary btn">
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieForm;
