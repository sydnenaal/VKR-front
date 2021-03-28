import React, { useMemo, useCallback, memo } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { useAuth } from '@vkr/app-auth'

import { WorkPage } from './pages'
import { AppContainer, AuthContainer } from './containers'
import { useModules } from './hooks'

const PrivateRoute = memo(({ component: Component, ...props }) => {
  const { isAuth } = useAuth()

  const renderFunc = useCallback(
    ({ location }) => {
      const loginData = { pathname: '/login', state: { from: location } }
      const homeData = { pathname: '/settings', state: { from: location } }

      if (!isAuth) {
        return <Redirect to={loginData} />
      }

      if (location.pathname === '/') {
        return <Redirect to={homeData} />
      }

      return (
        <AppContainer>
          <Component />
        </AppContainer>
      )
    },
    [Component, isAuth],
  )

  return <Route {...props} render={renderFunc} />
})

const AuthRoute = memo(() => {
  const { isAuth } = useAuth()

  const renderFunc = useCallback(
    ({ location }) => {
      if (isAuth) {
        return <Redirect to={{ pathname: '/', state: { from: location } }} />
      }

      return <AuthContainer />
    },
    [isAuth],
  )

  return <Route exact path="/login" render={renderFunc} />
})

const Routing = memo(() => {
  const modules = useModules()

  console.log(modules)

  const routes = useMemo(
    () =>
      modules.map(({ key, route, component }) => <PrivateRoute key={key} exact path={route} component={component} />),
    [modules],
  )

  return (
    <Router>
      <Switch>
        {routes}
        <PrivateRoute exact path="/" />
        <AuthRoute />
      </Switch>
    </Router>
  )
})

PrivateRoute.displayName = 'PrivateRoute'
AuthRoute.displayName = 'AuthRoute'
Routing.displayName = 'Routing'

export default Routing
