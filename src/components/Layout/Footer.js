import React, {Fragment} from "react";
import "../../styles/Layout/Footer.scss";
import "bootstrap/dist/css/bootstrap.css";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer page-footer font-small blue">
        <div className="footer-copyright text-center py-3">
          ©2021 Created by{" "}
          <a
            className="color-footer"
            style={{ textDecoration: "none" }}
            href="https://www.sarapalacios.me"
          >
            Sara Palacios{" "}
          </a>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
