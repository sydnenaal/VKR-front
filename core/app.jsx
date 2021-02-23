import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AppContainer } from "./containers";

function Routing() {
  return (
    <Router>
      <AppContainer>
        <Switch>
          <Route exact path="/about" component={() => <p>/about</p>} />
          <Route exact path="/home" component={() => <p>/home</p>} />
          <Route exact path="/" component={() => <p>/</p>} />
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default Routing;
