import React from "react";
import "../../styles/ReadMe/ButtonCV.scss";

const ButtonCV = () => {
  return (
    <div className="btn-box">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="cta-btn btn-cv"
        href="https://drive.google.com/file/d/1dne34zF5dbEZLaWbDsoLvWCfh0De39TZ/view"
      >
        Resume ENG
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="cta-btn btn-cv"
        href="https://drive.google.com/file/d/1mHsOxWyvBqc4aTfDZ63Snc-frdcaoOqy/view"
      >
        Resume ES
      </a>
    </div>
  );
};

export default ButtonCV;
