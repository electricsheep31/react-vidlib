import React from "react";

const Search = ({ name, onChange }) => {
  return (
    <div className="form-group">
      <input
        id={name}
        name={name}
        className="form-control"
        placeholder="Search"
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
