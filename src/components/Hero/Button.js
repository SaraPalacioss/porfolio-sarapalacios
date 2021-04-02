import React from "react";
import i18n from '../../i18n';
import { Link } from "react-scroll";

const Button = () => {
  return (
    <div>
      <Link className="button" href="readme" to="readmeid" smooth duration={1000}>
      {i18n.t('know_more_btn')}
      </Link>
    </div>
  );
};

export default Button;

