import { AUTH_LOADING, AUTH_ERROR, AUTH_SUCCESS } from "../reducers";

// Auth mock
export function Login(login, password) {
  return async (dispatch) => {
    try {
      dispatch({ type: AUTH_LOADING });

      const user = {
        username: "Dmitry Erokhin",
        role: "user",
        login: "admin",
        password: "admin",
        token: "000000000000",
      };

      setTimeout(() => {
        if (login !== "admin" || password !== "admin") {
          throw "401: unauthorized";
        }

        dispatch({ type: AUTH_SUCCESS, payload: user });
      }, 1000);
    } catch (err) {
      dispatch({ type: AUTH_ERROR, payload: err });
    }
  };
}
