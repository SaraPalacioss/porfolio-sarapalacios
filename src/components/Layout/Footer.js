import React, {Fragment} from "react";
import i18n from "../../i18n";
import "../../styles/Layout/Footer.scss";
import "bootstrap/dist/css/bootstrap.css";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer page-footer font-small blue">
        <div className="footer-copyright text-center py-3">
          ©2021 {i18n.t('footer')}
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
