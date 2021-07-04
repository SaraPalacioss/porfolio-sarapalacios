import React from "react";
import { Helmet } from "react-helmet";
import i18n from "../../i18n";
import Profile from "../../images/profile.jpeg"
import "../../styles/ReadMe/ReadMe.scss";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import ButtonCV from "../ReadMe/ButtonCV";

const ReadMe = () => {
  return (
    <div className="readme" id="readmeid">
      <Helmet>
        <title>ReadMe</title>
      </Helmet>
      <div className="readme-info container">
        <Pulse>
          <img
            src={Profile}
            alt="sara-pic"
          />
        </Pulse>
        <div>
          <div>
            {" "}
            <Fade right duration={1000} delay={1000} distance="30px">
              <p>
                {i18n.t('bio')}
              </p>
            </Fade>
            <br></br>
            <br></br>
            <Fade right duration={1000} delay={2000} distance="30px">
              <span className="stack container">
                {i18n.t('tech_stack')}:
                <br></br>
                <br></br>
                <Fade right duration={1000} delay={3000} distance="30px">
                  <div className="stack-container container">
                    <div><a className="stack-style">JavaScript</a></div>
                    <div><a className="stack-style">TypeScript</a></div>
                    <div><a className="stack-style">React</a></div>
                    <div><a className="stack-style">NodeJS</a></div>
                    <div><a className="stack-style">Express</a></div>
                    <div><a className="stack-style">Redux</a></div>
                    <div><a className="stack-style">NextJS</a></div>
                    <div><a className="stack-style">Gatsby</a></div>
                    <div><a className="stack-style">MongoDB</a></div>
                    <div><a className="stack-style">Mongoose</a></div>
                    <div><a className="stack-style">Handlebars</a></div>
                    <div><a className="stack-style">API REST</a></div>
                    <div><a className="stack-style">Git</a></div>
                    <div><a className="stack-style">GitHub</a></div>
                    <div><a className="stack-style">ES6</a></div>
                    <div><a className="stack-style">HTML</a></div>
                    <div><a className="stack-style">CSS</a></div>
                  </div>
                </Fade>
              </span>
            </Fade>

          </div>
          <br></br>

          <div>
            <Fade bottom duration={1000} delay={3000} distance="30px">
              <ButtonCV />
            </Fade>
          </div>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default ReadMe;
