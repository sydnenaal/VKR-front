import { useCallback } from 'react'
import { compose } from 'ramda'
import { useSelector, useDispatch } from 'react-redux'

import { isAuthLoading, selectUserData, isAuthenticated } from '../selectors'
import { AUTH_LOGOUT } from '../reducers'
import { Login } from '../actions'

export function useAuth() {
  const dispatch = useDispatch()

  const loading = useSelector(isAuthLoading)
  const isAuth = useSelector(isAuthenticated)
  const user = useSelector(selectUserData)

  const loginUser = useCallback(compose(dispatch, Login), [dispatch])
  const logout = useCallback(() => dispatch({ type: AUTH_LOGOUT }), [dispatch])

  return { user, loading, isAuth, loginUser, logout }
}
