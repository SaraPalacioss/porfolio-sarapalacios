import React from "react";
import "../../styles/Layout/Navbar.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-style">
    

    
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
       
          <li className="nav-item active nav-link">

            <a href="/es/">
              <img className="flag" src="https://i.ibb.co/SfD0vLV/espana.png" alt="spanish-flag" />
            </a>
            <a href="/en/">
              <img className="flag" src="https://i.ibb.co/xF66jGN/reino-unido.png" alt="english-flag" />
            </a>

          </li>
        </ul>
 
    </nav>
  );
};

export default Navbar;
