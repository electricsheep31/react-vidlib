import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  //the rest operator matches properties with the same key value pair, ex. name={name}
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        id={name}
        name={name} //special case because the rest operator includes ANY OTHER properties that isnt already listed
        className="form-control"
        //ref={this.username}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;

// OLD WAY WITHOUT REST OPERATOR:
// const Input = ({ name, label, value, onChange, error, type }) => {
//   return (
//     <div className="form-group">
//       <label htmlFor={name}>{label}</label>
//       <input
//         value={value}
//         onChange={onChange}
//         name={name}
//         type={type}
//         id={name}
//         autoFocus
//         className="form-control"
//         //ref={this.username}
//       />
//       {error && <div className="alert alert-danger">{error}</div>}
//     </div>
//   );
// };
