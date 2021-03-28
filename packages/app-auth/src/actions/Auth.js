import { AUTH_LOADING, AUTH_ERROR, AUTH_SUCCESS } from '../reducers'

// Auth mock
export function Login(login, password) {
  return async (dispatch) => {
    try {
      dispatch({ type: AUTH_LOADING })

      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          const user = {
            name: 'Dmitry',
            surname: 'Erokhin',
            role: 'user',
            login: 'admin',
            password: 'admin',
            token: '000000000000',
          }

          if (login !== 'admin' || password !== 'admin') {
            reject({ success: false, message: '401: unauthorized' })
          }

          resolve({ success: true, body: user })
        }, 1000)
      })

      dispatch({ type: AUTH_SUCCESS, payload: response.body })
    } catch (err) {
      console.log(err)
      dispatch({ type: AUTH_ERROR, payload: err.message })
    }
  }
}
