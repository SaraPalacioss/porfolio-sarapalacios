import React from "react";
import Pulse from 'react-reveal/Pulse';
import "../../styles/Titles.scss";

const ProjectsTitle = () => {
  return (
    <div className="jumbotron" id="projectsid">
      <Pulse>
        <h1 className="display-4">Projects</h1>
      </Pulse>
    </div>
  );
};

export default ProjectsTitle;
