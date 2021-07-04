import React from "react";
import EngFlag from "../../images/eng_logo.png";
import EspFlag from "../../images/es_logo.png";
import "../../styles/Layout/Navbar.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-style">



      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">

        <li className="nav-item active nav-link">
          <a href="/es/">
            <img className="flag" src={EspFlag} alt="spanish-flag" title="Spanish flag logo" />
          </a>
          <a href="/en/">
            <img className="flag" src={EngFlag} alt="english-flag" title="English flag logo" />
          </a>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;
