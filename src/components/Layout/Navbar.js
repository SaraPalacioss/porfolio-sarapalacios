import React from "react";
import i18n from '../../i18n'
import { Link } from "react-scroll";
import "../../styles/Layout/Navbar.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark navbar-style">
      <button
        className="navbar-toggler collapse-style"
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
            <Link className="nav-link" href="/home" to="heroid" smooth duration={1000}>

              {i18n.t('home')}

              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" href="/readme" to="readmeid" smooth duration={1000}>
              readme.MD
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" href="/projects" to="projectsid" smooth duration={1000}>

              {i18n.t('projects')}


              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" href="/apps" to="appsid" smooth duration={1000}>
              {i18n.t('apps')}
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" href="/contact" to="contactid" smooth duration={1000}>
              {i18n.t('contact')}

              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active nav-link">

            <a href="/es/">
              <img className="flag" src="https://i.ibb.co/SfD0vLV/espana.png" alt="spanish-flag" />
            </a>
            <a href="/en/">
              <img className="flag" src="https://i.ibb.co/xF66jGN/reino-unido.png" alt="english-flag" />
            </a>

          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
