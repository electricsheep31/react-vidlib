import React, { Component } from "react";

class Genres extends Component {
  state = {};
  render() {
    const {
      currentGenre,
      items,
      onGenreChange,
      textProperty,
      valueProperty,
    } = this.props;
    let liClasses = "list-group-item list-group-item-action";

    console.log(currentGenre);

    return (
      <ul className="list-group">
        <li
          className={
            currentGenre === "All Genres"
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onGenreChange("All Genres")}
          key="0"
        >
          All Genres
        </li>
        {items.map((item) => (
          <li
            key={item[valueProperty]}
            className={
              currentGenre === item[textProperty]
                ? liClasses + " active"
                : liClasses
            }
            onClick={() => onGenreChange(item[textProperty])}
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    );
  }
}

/* the extra properties (textProperty, valueProperty) makes the listgroup component flexible
and more reusable since it doesn't rely on knowing the property names
within an object */

Genres.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default Genres;

//input: genres, currentGenre
//events raised: genreClicked
