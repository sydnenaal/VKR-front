import React, { useMemo, useCallback } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { useAuth } from "@vkr/app-auth";

import { AppContainer, AuthContainer } from "./containers";
import { useModulesInternals } from "./hooks";

function PrivateRoute({ component: Component, ...props }) {
  const { isAuth } = useAuth();

  const renderFunc = useCallback(
    ({ location }) => {
      const state = { from: location };
      const loginData = { pathname: "/login", state };
      const homeData = { pathname: "/settings", state };

      if (!isAuth) {
        return <Redirect to={loginData} />;
      }

      if (location.pathname === "/") {
        return <Redirect to={homeData} />;
      }

      return (
        <AppContainer>
          <Component />
        </AppContainer>
      );
    },
    [Component, isAuth]
  );

  return <Route {...props} render={renderFunc} />;
}

function AuthRoute() {
  const { isAuth } = useAuth();

  const renderFunc = useCallback(({ location }) => {
    const state = { from: location };
    const redirectData = { pathname: "/", state };

    if (isAuth) {
      return <Redirect to={redirectData} />;
    }

    return <AuthContainer />;
  }, []);

  return <Route exact path="/login" render={renderFunc} />;
}

function Routing() {
  const modules = useModulesInternals();

  const routes = useMemo(() => {
    return modules.map(({ default: item, key, Component }) => (
      <PrivateRoute key={key} exact path={item.route} component={Component} />
    ));
  }, [modules]);

  return (
    <Router>
      <Switch>
        {routes}
        <PrivateRoute exact path="/" />
        <AuthRoute />
      </Switch>
    </Router>
  );
}

export default Routing;
