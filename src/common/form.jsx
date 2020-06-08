import React, { Component } from "react";
import Input from "./input";
import Select from "./select";
import Joi from "joi-browser";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = {
      abortEarly: false,
    };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};

    error.details.map((item) => {
      return (errors[item.path[0]] = item.message);
    });

    return errors;
  };

  validateProperty = ({ name, value }) => {
    //use computed properties (ES6)
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    //do abort early
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const errors = this.validate();

    this.setState({
      errors: errors || {},
    });

    if (errors) return;

    this.doSubmit();
  };

  renderButton = (label) => {
    return (
      // if an object is returned, it is consodered truthy, if null, then it is falsy
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  };

  renderSelect = (label, name) => {
    const { errors } = this.state;
    const genreNames = this.state.data.genres.map((genre) => {
      return genre.name;
    });
    return (
      <Select
        data={genreNames}
        label={label}
        id={name}
        name={name}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };

  renderInput = (label, name, autoFocus = "false", type = "text") => {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        value={data[name]}
        label={label}
        autoFocus={autoFocus}
        onChange={this.handleChange}
        type={type}
        error={errors[name]}
      />
    );
  };
}

export default Form;
