import React from "react";
import i18n from "../../i18n";
import "../../styles/ReadMe/ButtonCV.scss";

const ButtonCV = () => {
  return (
    <div className="btn-box">
      {window.location.pathname.substr(1, 2) === 'en'

        ?
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn btn-cv"
          href="https://drive.google.com/file/d/1d68pJMZHrHJF1wJX4ZijOSr8uaqtgKWZ/view?usp=sharing"
        >
          {i18n.t('resume')}
      </a>
        :
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn btn-cv"
          href="https://drive.google.com/file/d/15_8WiNxoGMlNUCUmS_jI9_pIvWkSoORK/view?usp=sharing"
        >
          {i18n.t('resume')}
      </a>
      }

    </div>
  );
};

export default ButtonCV;
