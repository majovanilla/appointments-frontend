import { initAuthState } from '../helpers/initStates';

const authReducer = (state = initAuthState, action) => {
  switch (action.type) {
    case 'REQUEST_LOGIN':
      return {
        ...state,
        fetching: true,
      };

    case 'RECEIVE_LOGIN':
      localStorage.setItem('token', action.authToken);
      return {
        ...state,
        authToken: action.authToken,
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
