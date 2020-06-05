import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns, sortColumn, onSort, data }) => {
  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />

      {/* use "data" as prop because this needs to be decoupled from movies so that component can be appropriately reusable */}
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
