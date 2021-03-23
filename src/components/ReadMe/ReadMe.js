import React from "react";
import "../../styles/ReadMe/ReadMe.scss";
import Fade from "react-reveal/Fade";

import Pulse from "react-reveal/Pulse";
import ButtonCV from "../ReadMe/ButtonCV";

const ReadMe = () => {
  return (
    <div className="readme" id="readmeid">
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
                in web development.
                <br></br>
                <br></br>
                <span className="stack">
                  TECH STACK: 
                  <br></br>
                  <br></br>
                  <div className="stack-container">
                  <div><a className="stack-style">JavaScript</a></div> 
                  <div><a className="stack-style">TypeScript</a></div>
                  <div><a className="stack-style">React</a></div>
                  <div><a className="stack-style">NodeJS</a></div>
                  <div><a className="stack-style">Express</a></div>
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
            
                </span>
              </p>
            </Fade>
          </div>
        
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
