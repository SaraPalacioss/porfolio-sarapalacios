import React from "react";
import i18n from '../../i18n';
import Pulse from 'react-reveal/Pulse';

import "../../styles/Titles.scss";

const SmallAppsTitle = () => {
  return (
    <div className="jumbotron" id="projectsid">
      <Pulse>
        <h1 className="display-4">- {i18n.t('apps_title')} -</h1>
      </Pulse>
    </div>
  );
};

export default SmallAppsTitle;
