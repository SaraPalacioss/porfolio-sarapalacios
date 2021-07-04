import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";

import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (

    <Router>
    <Switch>
      <Route exact path="/" component={Home} />
   
      <Route exact path="/en" component={Home} />
      <Route exact path="/es" component={Home} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
  );
};

export default App;


