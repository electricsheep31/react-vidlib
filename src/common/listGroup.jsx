import React from "react";

const ListGroup = ({
  currentSelection,
  items,
  onSelectChange,
  textProperty,
  valueProperty,
}) => {
  let liClasses = "list-group-item list-group-item-action";
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          className={
            currentSelection === item ? liClasses + " active" : liClasses
          }
          onClick={() => onSelectChange(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};
/* the extra properties (textProperty, valueProperty) makes the listgroup component flexible
and more reusable since it doesn't rely on knowing the property names
within an object */
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;

//input: genres, currentGenre
//events raised: genreClicked
