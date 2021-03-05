import React, { useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AppContainer } from "./containers";
import { useModulesInternals } from "./hooks";

function Routing() {
  const modules = useModulesInternals();

  const routes = useMemo(() => {
    return modules.map(({ default: item, Component }) => (
      <Route key={item.key} exact path={item.route} component={Component} />
    ));
  }, [modules]);

  return (
    <Router>
      <AppContainer>
        <Switch>{routes}</Switch>
      </AppContainer>
    </Router>
  );
}

export default Routing;
