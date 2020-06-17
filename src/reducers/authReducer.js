import { initAuthState } from '../helpers/initStates';
import { saveToken } from '../helpers/token';

const authReducer = (state = initAuthState, action) => {
  switch (action.type) {
    case 'REQUEST_LOGIN':
      return {
        ...state,
        fetching: true,
      };

    case 'SET_TOKEN':
      return {
        ...state,
        authToken: action.authToken,
      };

    case 'RECEIVE_LOGIN':
      saveToken(action.authToken);
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

    case 'REQUEST_SIGNUP':
      return {
        ...state,
        fetching: true,
      };

    case 'RECEIVE_SIGNUP':
      saveToken(action.authToken);
      return {
        ...state,
        authToken: action.authToken,
        fetching: false,
      };

    case 'RECEIVE_SIGNUP_ERROR':
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
