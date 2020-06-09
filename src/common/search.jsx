import React from "react";

const Search = ({ name, onChange, value }) => {
  console.log(value);
  return (
    <div className="form-group">
      <input
        id={name}
        name={name}
        className="form-control my-3"
        placeholder="Search..."
        onChange={onChange}
        value={value}
        type="text"
      />
    </div>
  );
};

export default Search;
