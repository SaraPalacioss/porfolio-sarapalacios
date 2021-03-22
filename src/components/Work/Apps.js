import React from "react";
import "../../styles/Work/Apps.scss";
import Fade from "react-reveal/Fade";


const Apps = () => {
  return (
    <div className="app-style" id="appsid">
      <br></br>
      <br></br>
      <Fade bottom duration={1000} delay={1000} distance="30px">

      <div className="card-columns container">
        <div className="card">
          <figure className="snip0015 card-img-top">
            <img
              src="https://resizer.iproimg.com/unsafe/880x/https://assets.iproup.com/assets/jpg/2019/11/6807.jpg?6.3.1"
              alt="criptoconverter"
            />

            <figcaption className="title-style">
              <h4>Criptoconverter</h4>
              <a href="www.google.es"> </a>
            </figcaption>
          </figure>
        </div>
        <div className="card">
          <figure className="snip0015 card-img-top">
            <img
              src="https://s3.scoopwhoop.com/anj/WW/487207588.png"
              alt="bd"
            />

            <figcaption className="title-style">
              <h4>Breaking Bad quotes</h4>
              <a href="www.google.es"> </a>
            </figcaption>
          </figure>
        </div>
        <div className="card">
          <figure className="snip0015 card-img-top">
            <img
              src="https://gestiondeclinicasveterinarias.com/wp-content/uploads/2016/03/oficina-veterinaria-virtual-clinicas.jpg"
              alt="vet"
            />

            <figcaption className="title-style">
            <h4>Veterinary booking</h4>
              <a href="www.google.es"> </a>
            </figcaption>
          </figure>
        </div>
        <div className="card">
          <figure className="snip0015 card-img-top">
            <img
              src="https://www.lyricfind.com/assets/images/services/LyricsSearch.jpg"
              alt="lyricssearch"
            />

            <figcaption className="title-style">
              <h4>Criptoconverter</h4>
              <a href="www.google.es"> </a>
            </figcaption>
          </figure>
        </div>
        <div className="card">
          <figure className="snip0015 card-img-top">
            <img
              src="https://lh3.googleusercontent.com/proxy/Kqa-PSpK1Ydb9ILt1ebEwDz3ZnmNsuY8ERc9JAZ9hLvz_TRDj6qFyE0v9B_e82RrfOCyxSWV_JEqiDytVsQGu0ty0gyY-tcXCCq1-YD9L_Lju4Wre9zlim10AWNQx7DdJWTyU9AP7rfI-Kg" alt="imagessearch"
            />

            <figcaption className="title-style">
              <h4>Criptoconverter</h4>
              <a href="www.google.es"> </a>
            </figcaption>
          </figure>
        </div>
        <div className="card">
          <figure className="snip0015 card-img-top">
            <img
              src="https://lucep.com/wp-content/uploads/2016/07/budget-iStock_000041295790_Large-1.jpg" alt="budget"
            />

            <figcaption className="title-style">
              <h4>Criptoconverter</h4>
              <a href="www.google.es"> </a>
            </figcaption>
          </figure>
        </div>
        <div className="card">
          <figure className="snip0015 card-img-top">
            <img
              src="https://www.quoteme.ie/img/images/car-insurance-calculator.jpg" alt="carassurance"
            />

            <figcaption className="title-style">
              <h4>Criptoconverter</h4>
              <a href="www.google.es"> </a>
            </figcaption>
          </figure>
        </div>
        <div className="card">
          <figure className="snip0015 card-img-top">
            <img
              src="https://dv-website.s3.amazonaws.com/uploads/2019/05/jz_csweather_060619.jpg" alt="weather"
            />

            <figcaption className="title-style">
              <h4>Criptoconverter</h4>
              <a href="www.google.es"> </a>
            </figcaption>
          </figure>
        </div>
      
        {/* <div className="card">
        <img
          className="card-img-top"
          src="https://resizer.iproimg.com/unsafe/880x/https://assets.iproup.com/assets/jpg/2019/11/6807.jpg?6.3.1"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Criptoconverter</h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div className="card">
        <img
          className="card-img-top"
          src="https://s3.scoopwhoop.com/anj/WW/487207588.png"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This card has supporting text below as a natural lead-in to
            additional content.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div className="card">
        <img
          className="card-img-top"
          src="https://gestiondeclinicasveterinarias.com/wp-content/uploads/2016/03/oficina-veterinaria-virtual-clinicas.jpg"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div className="card">
        <img
          className="card-img-top"
          src="https://www.lyricfind.com/assets/images/services/LyricsSearch.jpg"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div className="card">
        <img
          className="card-img-top"
          src="https://lh3.googleusercontent.com/proxy/Kqa-PSpK1Ydb9ILt1ebEwDz3ZnmNsuY8ERc9JAZ9hLvz_TRDj6qFyE0v9B_e82RrfOCyxSWV_JEqiDytVsQGu0ty0gyY-tcXCCq1-YD9L_Lju4Wre9zlim10AWNQx7DdJWTyU9AP7rfI-Kg"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div> */}
      </div>
      </Fade>
      <br></br>
      <br></br>
    </div>
  );
};

export default Apps;
