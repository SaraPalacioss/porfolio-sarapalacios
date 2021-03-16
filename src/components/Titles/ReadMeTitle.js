import React from "react";
import Pulse from 'react-reveal/Pulse';
import "../../styles/Titles.scss";

const ReadMeTitle = () => {
  return (
    <div className="jumbotron" id="projectsid">
      <Pulse>
        <h1 className="display-4">readme.MD</h1>
      </Pulse>
    </div>
  );
};

export default ReadMeTitle;
