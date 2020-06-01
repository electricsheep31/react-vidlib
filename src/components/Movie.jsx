import React, { Component } from "react";
import Like from "../common/like";

class Movie extends Component {
  state = {};

  render() {
    const { title, numberInStock, dailyRentalRate, liked } = this.props.movie;
    const genre = this.props.movie.genre.name;
    return (
      <tr>
        <td>{title}</td>
        <td>{genre}</td>
        <td>{numberInStock}</td>
        <td>{dailyRentalRate}</td>
        <td>
          <Like onLikeToggle={this.props.onLikeToggle} liked={liked} />
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.props.handleDelete(this.props.movie)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Movie;
