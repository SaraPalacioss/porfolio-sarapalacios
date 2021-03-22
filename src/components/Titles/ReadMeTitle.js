import React from "react";
import Pulse from 'react-reveal/Pulse';
import "../../styles/Titles.scss";

const ReadMeTitle = () => {
  return (
    <div className="jumbotron" >
      <Pulse>
        <h1 className="display-4" id="readmeid">readme.MD</h1>
      </Pulse>
    </div>
  );
};

export default ReadMeTitle;
