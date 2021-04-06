import React from "react";
import Button from "./Button";
import i18n from '../../i18n';

import "../../styles/Hero/Hero.scss";

const Hero = () => {
  return (
    <div className="containers" id="heroid">
      <div className="box">
        <div className="title">
          <span className="block"></span>
          <h1 className="my-name">
            Sara Palacios<span></span>
          </h1>
        </div>

        <div className="role">
          <div className="block"></div>
          <p className="my-role">{i18n.t('fullstack_developer')}
          </p>
        </div>
        <div className="adding">
          <div className="button"></div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Hero;

