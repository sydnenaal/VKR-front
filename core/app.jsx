import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { generateKey } from "@vkr/app-utils";

import { AppContainer } from "./containers";

function Routing() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const modules = process.env.MODULES_LIST.map((item) =>
      import("@vkr/modules-" + item)
    );

    Promise.all(modules).then((res) => {
      console.log(res);
      const routes = res.map(({ default: item, Component }) => (
        <Route
          key={generateKey()}
          exact
          path={item.route}
          component={Component}
        />
      ));

      setRoutes(routes);
    });
  }, []);

  return (
    <Router>
      <AppContainer>
        <Switch>{routes}</Switch>
      </AppContainer>
    </Router>
  );
}

export default Routing;
