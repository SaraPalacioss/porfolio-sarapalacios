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

// const Cover = () => {
//   let TxtRotate = function (el, toRotate, period) {
//     this.toRotate = toRotate;
//     this.el = el;
//     this.loopNum = 0;
//     this.period = parseInt(period, 10) || 2000;
//     this.txt = "";
//     this.tick();
//     this.isDeleting = false;
//   };

//   TxtRotate.prototype.tick = function () {
//     let i = this.loopNum % this.toRotate.length;
//     let fullTxt = this.toRotate[i];

//     if (this.isDeleting) {
//       this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//       this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }

//     this.el.innerHTML = '<span className="wrap">' + this.txt + "</span>";

//     let that = this;
//     let delta = 300 - Math.random() * 100;

//     if (this.isDeleting) {
//       delta /= 2;
//     }

//     if (!this.isDeleting && this.txt === fullTxt) {
//       delta = this.period;
//       this.isDeleting = true;
//     } else if (this.isDeleting && this.txt === "") {
//       this.isDeleting = false;
//       this.loopNum++;
//       delta = 500;
//     }

//     setTimeout(function () {
//       that.tick();
//     }, delta);
//   };

//   window.onload = function () {
//     let elements = document.getElementsByclassNameName("txt-rotate");
//     for (let i = 0; i < elements.length; i++) {
//       let toRotate = elements[i].getAttribute("data-rotate");
//       let period = elements[i].getAttribute("data-period");
//       if (toRotate) {
//         new TxtRotate(elements[i], JSON.parse(toRotate), period);
//       }
//     }
//     // INJECT CSS
//     let css = document.createElement("style");
//     css.type = "text/css";
//     css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
//     document.body.appendChild(css);
//   };

//   return (
//     <div classNameName="cover">
//       <h2 classNameName="wellcome-text">Hi There, I am Sara Palacios</h2>
//       <h2>
//         <span
//           classNameName="txt-rotate wellcome-text"
//           data-period="2000"
//           data-rotate='[ " Full Stack Developer.", " Tech lover.", " pure JS.", " pretty.", " fun!" ]'
//         ></span>
//       </h2>
//       <div>
//     <Button/>
//       </div>

//     </div>

//   );
// };

// export default Cover;
