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

  renderSortIcon = (column) => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              className="clickable"
              onClick={() => this.raiseSort(column.path)}
              key={column.path || column.key}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
