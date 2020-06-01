import React, { Component } from "react";

class Genres extends Component {
  state = {};
  render() {
    const { currentGenre, genres, onGenreChange } = this.props;
    let liClasses = "list-group-item list-group-item-action";

    console.log(currentGenre);
    return (
      <ul className="list-group">
        {/* <li
          className={
            currentGenre === "All Genres"
              ? "list-group-item active"
              : "list-group-item"
          }
          key="0"
        >
          All Genres
        </li> */}
        {genres.map((genre) => (
          <li
            key={genre._id}
            className={
              currentGenre === genre.name ? liClasses + " active" : liClasses
            }
            onClick={() => onGenreChange(genre)}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default Genres;

//input: genres, currentGenre
//events raised: genreClicked
