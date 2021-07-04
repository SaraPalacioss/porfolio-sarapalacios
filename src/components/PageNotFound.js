import React from 'react';
import { Link } from 'react-router-dom'
import i18n from "../i18n/index";
import '../styles/PageNotFound.scss'


const PageNotFound = () => {

    const goHome = () => {
        window.location = "https://www.sarapalacios.me"

    }
    return (
        <div className="pagenotfound">
            <div className="container position-pic">

                <h2>{i18n.t('pagenotfound1')}<button onClick={goHome}> {i18n.t('pagenotfound2')} </button>{i18n.t('pagenotfound3')}</h2>
                <img src="https://res.cloudinary.com/dvak0r03q/image/upload/v1625415752/sarapalacios/404.png" alt="404_error" />

            </div>
        </div>
    );
}

export default PageNotFound;