import React from "react";
import "../../styles/Layout/Navbar.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse navbar-center"
        id="navbarTogglerDemo02"
      >
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/about">
              About Me
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/mywork">
              My Work
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/shop">
              Shop
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active"
              href="mailto:contact@sarapalacios.me"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
