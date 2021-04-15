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
          href="https://drive.google.com/file/d/1hn601KLMTsc_n74lVej0nA4HH9b4EA_N/view?usp=sharing"
        >
          {i18n.t('resume')}
      </a>
        :
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn btn-cv"
          href="https://drive.google.com/file/d/1q9GUEOfXDvkGKXTiokyFeypANdSfAmsV/view?usp=sharing"
        >
          {i18n.t('resume')}
      </a>
      }

    </div>
  );
};

export default ButtonCV;
