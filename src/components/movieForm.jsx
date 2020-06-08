import React, { Component } from "react";
import Form from "../common/form";
import { getGenres } from "../services/fakeGenreService";
import Joi from "joi-browser";

class MovieForm extends Form {
  //title: required
  //genre: dropdown
  //number_stock: int 0-100
  //rate: 0-10
  //save

  state = {
    data: { title: "", genres: [], numberInStock: "", rate: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .integer()
      .min(0)
      .max(100)
      .required()
      .label("Number in Stock"),
    rate: Joi.number().min(0).max(10).required().label("Rate"),
  };

  componentDidMount = () => {
    console.log("component did mount");
    const data = { ...this.state.data };
    const genres = [...getGenres()];
    data.genres = genres;
    this.setState({
      data,
    });
  };

  doSubmit = () => {
    this.props.history.push("/movies");
  };

  render() {
    return (
      <React.Fragment>
        <h1>Movie Form {this.props.match.params.id}</h1>
        {this.renderInput("Title", "title", "autofocus")}
        {this.renderSelect("Genre", "genre")}
        {this.renderInput("Number in Stock", "numberInStock", null)}
        {this.renderInput("Rate", "rate", null)}
        {this.renderButton("Save")}
      </React.Fragment>
    );
  }
}

export default MovieForm;
