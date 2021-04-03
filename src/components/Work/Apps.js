import React from "react";
import i18n from '../../i18n';
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
              src="https://i.ibb.co/MGk4f2L/Cripto.jpg"
              alt="criptoconverter"
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
              src="https://i.ibb.co/PgL8D37/BBad.webp"
              alt="bd"
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
              src="https://i.ibb.co/q9psK3P/oficina-veterinaria-virtual-clinicas.jpg
"
              alt="vet"
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
              src="https://i.ibb.co/DVdXVrd/Lyrics-Search.jpg"
              alt="lyricssearch"
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
              src="https://i.ibb.co/xmNsNnL/Imagessearch.jpg" alt="imagessearch"
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
              src="https://i.ibb.co/x7WwB2c/Burget.jpg" alt="budget"
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
              src="https://i.ibb.co/K73dNzV/Calculator.jpg" alt="carassurance"
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
              src="https://dv-website.s3.amazonaws.com/uploads/2019/05/jz_csweather_060619.jpg" alt="weather"
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
