export const AUTH_LOADING = "auth/loading";
export const AUTH_SUCCESS = "auth/success";
export const AUTH_ERROR = "auth/error";
export const AUTH_LOGOUT = "auth/logout";

const initialState = {
  loading: false,
  error: null,
  data: {},
};

export const AuthReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_LOADING:
      return { ...state, loading: true };
    case AUTH_SUCCESS:
      return { ...state, loading: false, error: null, data: payload };
    case AUTH_ERROR:
      return { ...state, loading: false, error: payload };
    case AUTH_LOGOUT:
      return initialState;
    default:
      return state;
  }
};
