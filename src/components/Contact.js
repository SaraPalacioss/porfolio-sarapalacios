import React from 'react';
import "../styles/Contact.scss"

const Contact = () => {
    return (
        <div className="contact" id="contactid">

            <h2>Would you like to contact with me ??</h2>
            <a target="_blank"
                className="contact-btn contact-cv" href="mailto:contact@sarapalacios.me">contact@sarapalacios.me </a>

            <div className="social-icons">
                <div><a href="#"><img src="https://i.ibb.co/r7J7YJh/linkedin.png" alt="codepen" /></a></div>
                <div><a href="#"><img src="https://i.ibb.co/tcPnZFC/logotipo-de-github.png" alt="codepen" /></a></div>
                <div><a href="#"><img src="https://i.ibb.co/f9xcv90/codepen.png" alt="codepen" /></a></div>
            </div>
        </div>


    );
}

export default Contact;