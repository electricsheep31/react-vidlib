import React from "react";

const Select = ({ data, name, label, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select className="form-control" id={name}>
        {data.map((item) => (
          <option>{item}</option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
