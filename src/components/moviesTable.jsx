import React from "react";
import Like from "../common/like";

const MoviesTable = (props) => {
  const { movies, handleDelete, handleLike, onLikeToggle } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
          <th>&nbsp;</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like
                onLikeToggle={() => onLikeToggle(movie)}
                liked={movie.liked}
              />
            </td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(movie)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
