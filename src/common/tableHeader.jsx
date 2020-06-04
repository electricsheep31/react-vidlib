import React, { Component } from "react";

class TableHeader extends Component {
  //INTERFACE:
  //columns: array,
  //sortColumn: oject,
  //onSort: func

  raiseSort = (targetPath) => {
    //change the sort order if the target path is the same as the state's sort column
    const sortColumn = { ...this.props.sortColumn };

    if (targetPath === sortColumn.path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = targetPath;
      sortColumn.order = "asc";
    }

    this.props.onSort(sortColumn);
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              onClick={() => this.raiseSort(column.path)}
              key={column.path || column.key}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
