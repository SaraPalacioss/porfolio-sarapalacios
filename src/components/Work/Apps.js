import React from "react";
import Cripto from "../../images/Cripto.jpeg";
import BBad from "../../images/BBad.jpeg";
import Vet from "../../images/vet.jpeg";
import Lyrics from "../../images/Lyrics-Search.jpeg";
import Imagessearch from "../../images/Imagessearch.jpeg";
import Budget from "../../images/Budget.jpeg";
import Calculator from "../../images/Calculator.jpeg";
import Weather from "../../images/Tiempo.jpeg";
import i18n from "../../i18n";
import "../../styles/Work/Apps.scss";
import Fade from "react-reveal/Fade";


const Apps = () => {
  return (
    <div className="app-style" id="appsid">
      <Fade bottom duration={1000} delay={1000} distance="30px">

        <div className="card-columns container">
          <div className="card">
            <figure className="snip0015 card-img-top">
              <img
                src={Cripto}
                alt="criptoconverter"
                title="Cryptocurrency"
              />

              <figcaption className="title-style">
                <h4>{i18n.t('criptoconverter')}</h4>
                <a href="https://criptoconverter.netlify.app"> </a>
              </figcaption>
            </figure>
          </div>
          <div className="card">
            <figure className="snip0015 card-img-top">
              <img
                src={BBad}
                alt="bd"
                title="Breaking Bad"
              />

              <figcaption className="title-style">
                <h4>{i18n.t('bb_quotes')}</h4>
                <a href="https://breakingbadquotess.netlify.app"> </a>
              </figcaption>
            </figure>
          </div>
          <div className="card">
            <figure className="snip0015 card-img-top">
              <img
                src={Vet}
                alt="vet"
                title="Veterinary"
              />
              <figcaption className="title-style">
                <h4>{i18n.t('veterinary_booking')}</h4>
                <a href="https://citasadministrador.netlify.app"> </a>
              </figcaption>
            </figure>
          </div>
          <div className="card">
            <figure className="snip0015 card-img-top">
              <img
                src={Lyrics}
                alt="lyricssearch"
                title="Lyrics search"
              />
              <figcaption className="title-style">
                <h4>{i18n.t('lyric_search')}</h4>
                <a href="https://buscadordeletras.netlify.app"> </a>
              </figcaption>
            </figure>
          </div>
          <div className="card">
            <figure className="snip0015 card-img-top">
              <img
                src={Imagessearch} alt="imagessearch"   title="Images search"
              />
              <figcaption className="title-style">
                <h4>{i18n.t('image_search')}</h4>
                <a href="https://imagenesfinder.netlify.app"> </a>
              </figcaption>
            </figure>
          </div>
          <div className="card">
            <figure className="snip0015 card-img-top">
              <img
                src={Budget} alt="budget"   title="Budget"
              />
              <figcaption className="title-style">
                <h4>{i18n.t('budget')}</h4>
                <a href="https://presupuestocontrol.netlify.app"> </a>
              </figcaption>
            </figure>
          </div>
          <div className="card">
            <figure className="snip0015 card-img-top">
              <img
                src={Calculator} alt="carassurance"   title="Calculator"
              />
              <figcaption className="title-style">
                <h4>{i18n.t('car_assurance')}</h4>
                <a href="https://cotizadorparaseguros.netlify.app"> </a>
              </figcaption>
            </figure>
          </div>
          <div className="card">
            <figure className="snip0015 card-img-top">
              <img
                src={Weather} alt="weather"   title="Weather"
              />
              <figcaption className="title-style">
                <h4>{i18n.t('weather')}</h4>
                <a href="https://eltiempoactual.netlify.app"> </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </Fade>
      <br></br>
      <br></br>
    </div>
  );
};

export default Apps;
