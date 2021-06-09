import React, { useMemo, useCallback, memo } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { useAuth } from '@vkr/app-auth'

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
      const redirectParams = { pathname: '/', state: { from: location } }

      return isAuth ? <Redirect to={redirectParams} /> : <AuthContainer />
    },
    [isAuth],
  )

  return <Route exact path="/login" render={renderFunc} />
})

const Routing = memo(() => {
  const modules = useModules()

  const routes = useMemo(() => {
    const parseModule = ({ key, route, component }) => (
      <PrivateRoute key={key} exact path={route} component={component} />
    )

    return modules.map(parseModule)
  }, [modules])

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
