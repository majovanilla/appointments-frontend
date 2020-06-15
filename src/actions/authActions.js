import axios from 'axios';

export function requestLogin() {
  return {
    type: 'REQUEST_LOGIN',
  };
}

export function receiveLogin(authToken) {
  return {
    type: 'RECEIVE_LOGIN',
    authToken,
  };
}

export function receiveLoginError(error) {
  return {
    type: 'RECEIVE_LOGIN_ERROR',
    error,
  };
}

export function loginCall(email, password) {
  return dispatch => {
    axios.post('https://appointments-api-majovanilla.herokuapp.com/auth/login', {
      email,
      password,
    }).then(response => {
      dispatch(receiveLogin(response.data.auth_token));
    }).catch(error => {
      dispatch(receiveLoginError(error.response.data.message));
      alert(error.response.data.message);
    });
  };
}
