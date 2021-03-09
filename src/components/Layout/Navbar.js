import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import "../../styles/Layout/Navbar.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-style">
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
            <a className="nav-link" href="/home">
              <Link to="heroid" smooth duration={1000}>
                Home
              </Link>{" "}
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/readme">
              <Link to="readmeid" smooth duration={1000}>
                readme.MD
              </Link>{" "}
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/projects">
              <Link to="projectsid" smooth duration={1000}>
                Projects
              </Link>{" "}
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/smallapps">
              <Link to="smallappsid" smooth duration={1000}>
                Apps
              </Link>{" "}
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item" href="/contact">
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
