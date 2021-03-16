import React from "react";
import "../../styles/Work/Projects.scss";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    <div className="projects">
      <br></br>
      <br></br>
      <div className="projects-cards container">
        <Fade right duration={1000} delay={1000} distance="30px">
          <div className="d-flex card">
            <div>
              <img
                className="card-img-top"
                src="https://i.ibb.co/6rpLCFz/Captura-de-pantalla-2021-03-10-a-las-20-09-02.png"
                alt="portfolio"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Sara Palacios Web Dev Portfolio</h5>
              <p className="card-text">
                This is my Ironhack final project. It's a full responsive MERN
                web application make with ReactJs, ExpressJs, NodeJs, MongoDB,
                Axios, API Rest & Bootstrap.
              </p>
              <p className="card-text">
                <small className="stack-text">
                  React | Express | MongoJS | NodeJS
                </small>
              </p>
              <Fade bottom duration={1000} delay={2000} distance="30px">

              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn cta-btn-hero"
                  href="https://www.sarapalacios.me"
                >
                  Current site
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn text-color-main"
                  href="https://www.sarapalacios.me"

                >
                  GitHub
                </a>
              </div>
              </Fade>
            </div>
          </div>
        </Fade>
        <br></br>
        <Fade right duration={1000} delay={1000} distance="30px">
          <div className="d-flex card">
          
            <div>
              <img
                className="card-img-top"
                src="https://i.ibb.co/7rN3n8d/film-1-1.png"
                alt="thegoodfilm"
              />
            </div>

            <div className="card-body">
              <h5 className="card-title">theGoodFilm</h5>
              <p className="card-text">
                This is my Ironhack final project. It's a full responsive MERN
                web application make with ReactJs, ExpressJs, NodeJs, MongoDB,
                Axios, API Rest & Bootstrap.
              </p>
              <p className="card-text">
                <small className="stack-text">
                  React | Express | MongoJS | NodeJS
                </small>
              </p>
              <Fade bottom duration={1000} delay={2000} distance="30px">
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn cta-btn-hero"
                  href="https://www.sarapalacios.me"
                >
                  Site
                </a>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn text-color-main"
                  href="https://www.sarapalacios.me"

                >
                  GitHub
                </a>
              </div>
              </Fade>
            </div>
          </div>
        </Fade>
        <br></br>
        <Fade right duration={1000} delay={1000} distance="30px">
          <div className="d-flex card">
            <div>
              <img
                className="card-img-top"
                src="https://i.ibb.co/42Tn4BY/cocktails-3.png"
                alt="cocktails"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">All city cocktails</h5>
              <p className="card-text">
                This is my Ironhack final project. It's a full responsive MERN
                web application make with ReactJs, ExpressJs, NodeJs, MongoDB,
                Axios, API Rest & Bootstrap.
              </p>
              <p className="card-text">
                <small className="stack-text">
                  React | Express | MongoJS | NodeJS
                </small>
              </p>
              <Fade bottom duration={1000} delay={2000} distance="30px">
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn cta-btn-hero"
                  href="https://www.sarapalacios.me"
                >
                  Site
                </a>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn text-color-main"
                  href="https://www.sarapalacios.me"

                >
                  GitHub
                </a>
              </div>
              </Fade>
            </div>
          </div>
        </Fade>
        <br></br>
        <Fade right duration={1000} delay={1000} distance="30px">
          <div className="d-flex card">
            <div>
              <img
                className="card-img-top"
                src="https://i.ibb.co/C8WGXDN/Funko-3.png"
                alt="funkotrivial"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Funko Hollywood Trivial</h5>
              <p className="card-text">
                This is my Ironhack final project. It's a full responsive MERN
                web application make with ReactJs, ExpressJs, NodeJs, MongoDB,
                Axios, API Rest & Bootstrap.
              </p>
              <p className="card-text">
                <small className="stack-text">
                  React | Express | MongoJS | NodeJS
                </small>
              </p>
              <Fade bottom duration={1000} delay={2000} distance="30px">
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn cta-btn-hero"
                  href="https://www.sarapalacios.me"
                >
                  Site
                </a>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn text-color-main"
                  href="https://www.sarapalacios.me"

                >
                  GitHub
                </a>
              </div>
              </Fade>
            </div>
          </div>
        </Fade>

        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default Projects;
