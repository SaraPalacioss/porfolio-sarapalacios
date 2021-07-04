import React from "react";
import { Helmet } from "react-helmet";
import i18n from "../i18n";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import Linkedin from "../images/linkedin.png";
import GitHub from "../images/github.png"
import CodePen from "../images/codepen.png"
import "../styles/Contact.scss";

const Contact = () => {



    return (
        <div className="contact" id="contactid">
            <Helmet>
                <title>Contacto</title>
            </Helmet>
            <Fade top duration={1000} delay={1000} distance="30px">
                <h2>{i18n.t('contact_f')}</h2>
            </Fade>
            <Pulse bottom duration={1000} delay={2000} distance="30px">
                <a className="contact-btn contact-cv" href="mailto:contact@sarapalacios.me">contact@sarapalacios.me </a>

            </Pulse>
            <Fade bottom duration={1000} delay={1000} distance="30px">

                <div className="social-icons">
                    <div><a className="social" href="https://www.linkedin.com/in/sara-palaciosdepedro"><img src={Linkedin} alt="linkedin" /></a></div>
                    <div><a className="social" href="https://github.com/sarapalacioss"><img src={GitHub} alt="github" /></a></div>
                    <div><a className="social" href="https://codepen.io/sarapalacios"><img src={CodePen} alt="codepen" /></a></div>
                </div>
            </Fade>
        </div>


    );
}

export default Contact;