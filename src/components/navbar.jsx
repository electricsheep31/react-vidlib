import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        VIDLIB
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="navbar-nav">
          <NavLink to="/movies" className="nav-link nav-link">
            Movies
          </NavLink>

          <NavLink to="/customers" className="nav-link">
            Customers
          </NavLink>

          <NavLink to="/rentals" className="nav-link">
            Rentals
          </NavLink>

          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
