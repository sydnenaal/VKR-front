import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AppContainer } from "./containers";
import { useModulesInternals } from "./hooks";

function Routing() {
  const modules = useModulesInternals();

  return (
    <Router>
      <AppContainer>
        <Switch>
          {modules.map(({ default: item, Component }) => (
            <Route
              key={item.key}
              exact
              path={item.route}
              component={Component}
            />
          ))}
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default Routing;
