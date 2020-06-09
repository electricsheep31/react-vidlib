import React from "react";
import Form from "../common/form";
import { getGenres } from "../services/fakeGenreService";
import { getMovie, saveMovie } from "../services/fakeMovieService";
import Joi from "joi-browser";

class MovieForm extends Form {
  //title: required
  //genre: dropdown
  //number_stock: int 0-100
  //rate: 0-10
  //save

  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    errors: {},
    genres: [],
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .integer()
      .min(0)
      .max(100)
      .required()
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .min(0)
      .max(10)
      .required()
      .label("Daily Rental Rate"),
  };

  componentDidMount = () => {
    const genres = [...getGenres()];
    const id = this.props.match.params.id;
    this.setState({
      genres,
    });

    if (id === "new") return;

    const movie = getMovie(id);
    if (!movie) return this.props.history.replace("/not-found");

    //if history.push, then user clicking back button will get back to the form page with invalid movie id,
    //causing an infinite loop

    //mapToViewModel maps the state data to the movie object given by the API, which may not have the same properties
    this.setState({
      data: this.mapToViewModel(movie),
    });
  };

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  doSubmit = () => {
    saveMovie(this.state.data);
    this.props.history.push("/movies");
  };

  render() {
    return (
      <React.Fragment>
        <h1>Movie Form</h1>
        {this.renderInput("Title", "title", "autofocus")}
        {this.renderSelect("Genre", "genreId", this.state.genres)}
        {this.renderInput("Number in Stock", "numberInStock", null)}
        {this.renderInput("Rate", "dailyRentalRate", null)}
        {this.renderButton("Save")}
      </React.Fragment>
    );
  }
}

export default MovieForm;
