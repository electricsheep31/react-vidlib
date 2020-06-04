import React, { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";

class Pagination extends Component {
  render() {
    const { itemsPerPage, onPageChange, itemsCount, currentPage } = this.props;
    const numPages = Math.ceil(itemsCount / itemsPerPage);
    if (numPages === 1) return null;

    const pages = _.range(1, numPages + 1);

    return (
      <nav>
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={
                currentPage === page ? "page-item active" : "page-item"
              }
            >
              <a
                className="page-link"
                href=""
                onClick={() => onPageChange(page)}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

//For Type Checking:
// https://reactjs.org/docs/typechecking-with-proptypes.html

Pagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  itemsCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;

//interface? input? what events raised?

//input: numPages, currentPage
//events raised: pageClicked
