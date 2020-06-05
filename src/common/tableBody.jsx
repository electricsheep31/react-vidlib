import React, { Component } from "react";
import _ from "lodash";

//use lodash so that nested properties like genre.name can be obtained in the object iteration

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item); //returns React element

    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };

  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              // <td>{item['title']}</td>  this it the normal method, but will not work for nested properties
              // and because the title property is unknown and thus, a reference to column names is necessary
              // and is therefore iterate through

              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
