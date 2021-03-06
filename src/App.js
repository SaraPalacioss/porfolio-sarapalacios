import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import ReadMe from "./components/ReadMe";
import MyWork from "./components/Work/MyWork";
import FullProjects from "./components/Work/FullProjects";
import SmallApps from "./components/Work/SmallApps";
import Blog from "./components/Blog";
import Contact from "./components/Contact";


function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/readme" component={ReadMe} />
          <Route exact path="/mywork" component={MyWork} />
          <Route exact path="/mywork/fullprojects" component={FullProjects} />
          <Route exact path="/mywork/smallapps" component={SmallApps} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
  );
}

export default App;
