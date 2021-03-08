import React, { Component } from "react";
import "../../styles/ReadMe/ReadMe.scss";
import Fade from "react-reveal/Fade";

import Pulse from "react-reveal/Pulse";
import ButtonCV from "../ReadMe/ButtonCV";
import { Button } from "bootstrap";

const ReadMe = () => {
  return (
    <div className="readme">
      <h1>readme.MD</h1>

      <div className="readme-info">
        <Pulse>
          <img
            src="https://i.ibb.co/1dsMxSP/Captura-de-pantalla-2020-12-01-a-las-23-23-20.jpg"
            alt="sara-pic"
          />
        </Pulse>
        <div>
          <div>
            {" "}
            <Fade right duration={1000} delay={1000} distance="30px">
              <p>
                After working for more than 10 years in other sectors, I have
                decided to dedicate myself professionally to my true passion,
                web development. I am in love with technology and I like being
                able to create different solutions that really serve people and
                add value. In my experience, what distinguishes a good job from
                a great job is having understood the need and responding to
                expectations. My spectrum of skills includes both front-end and
                back-end creation and, for this, I use the latest technologies
                in the world of web development (ReactJS, NodeJS, ExpressJS,
                MongoDB among others).
              </p>
            </Fade>
          </div>
          <div>
            <Fade bottom duration={1000} delay={2000} distance="30px">
              <ButtonCV />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadMe;
