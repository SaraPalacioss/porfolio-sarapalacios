import React from "react";
import i18n from '../../i18n';
import "../../styles/Work/Projects.scss";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    <div className="projects-bg">
      <div className="projects container">

        <div className="projects-cards  card-deck">
          <Fade right duration={1000} delay={1000} distance="30px">
            <div className="card">
              <div>
                <img
                  className="card-img-top"
                  src="https://i.ibb.co/PQB6qJN/portolio.png"
                  alt="portfolio"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Sara Palacios Web Dev Portfolio</h5>
                <p className="card-text">
                  {i18n.t('portfolio')}
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
                      {i18n.t('current_site')}
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

          <Fade right duration={1000} delay={1000} distance="30px">
            <div className="card">

              <div>
                <img
                  className="card-img-top"
                  src="https://i.ibb.co/sPCjvTL/thegoodfilm-1.png"
                  alt="thegoodfilm"
                />
              </div>

              <div className="card-body">
                <h5 className="card-title">theGoodFilm</h5>
                <p className="card-text">
                  {i18n.t('thegoodfilm')}
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
                      href="https://thegoodfilm.netlify.app/"
                    >
                      {i18n.t('site')}
                    </a>

                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn text-color-main"
                      href="https://github.com/thegoodfilm"
                    >
                      GitHub
                </a>
                  </div>
                </Fade>
              </div>
            </div>
          </Fade>



        </div>
        <div className="projects-cards  card-deck">

          <Fade left duration={1000} delay={1000} distance="30px">
            <div className="card">
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
                  {i18n.t('allcitycocktails')}
                </p>
                <p className="card-text">
                  <small className="stack-text">
                    Handlebars | Express | MongoJS | NodeJS
      </small>
                </p>
                <Fade bottom duration={1000} delay={2000} distance="30px">
                  <div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn-hero"
                      href="https://all-city-cocktails.herokuapp.com/"
                    >
                      {i18n.t('site')}
                    </a>

                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn text-color-main"
                      href="https://github.com/SaraPalacioss/project-all-city-cocktails"

                    >
                      GitHub
      </a>
                  </div>
                </Fade>
              </div>
            </div>
          </Fade>

          <Fade left duration={1000} delay={1000} distance="30px">
            <div className="card">
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
                {i18n.t('funkohollywood')}
    </p>
                <p className="card-text">
                  <small className="stack-text">
                    Vanilla JavaScript | HTML | CSS
      </small>
                </p>
                <Fade bottom duration={1000} delay={2000} distance="30px">
                  <div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn-hero"
                      href="https://sarapalacioss.github.io/funko-hollywood-trivial/"
                    >
                      {i18n.t('site')}
                    </a>

                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn text-color-main"
                      href="https://github.com/SaraPalacioss/funko-hollywood-trivial"

                    >
                      GitHub
      </a>
                  </div>
                </Fade>
              </div>
            </div>
          </Fade>
        </div>

      </div>


    </div>
  );
};

export default Projects;
