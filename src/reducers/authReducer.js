import { initAuthState } from '../helpers/initStates';

const authReducer = (state = initAuthState, action) => {
  let token;
  switch (action.type) {
    case 'REQUEST_LOGIN':
      return {
        ...state,
        fetching: true,
      };

    case 'RECEIVE_LOGIN':
      token = localStorage.setItem('token', action.authToken);
      return {
        ...state,
        authToken: token,
        fetching: false,
      };

    case 'RECEIVE_LOGIN_ERROR':
      return {
        ...state,
        fetching: false,
        message: action.error,
      };

    default:
      return state;
  }
};

export default authReducer;
