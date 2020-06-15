import axios from 'axios';

function setToken(authToken) {
  return {
    type: 'SET_TOKEN',
    authToken,
  };
}

function requestLogin() {
  return {
    type: 'REQUEST_LOGIN',
  };
}

function receiveLogin(token) {
  return {
    type: 'RECEIVE_LOGIN',
    token,
  };
}

function receiveLoginError(error) {
  return {
    type: 'RECEIVE_LOGIN_ERROR',
    error,
  };
}

function loginCall(email, password) {
  return dispatch => {
    axios.post('https://appointments-api-majovanilla.herokuapp.com/auth/login', {
      email,
      password,
    }).then(response => {
      dispatch(setToken(response.data.auth_token));
    }).catch(error => {
      dispatch(receiveLoginError(error.response.data.message));
      alert(error.response.data.message);
      // return Promise.resolve;
    });
  };
}

export {
  setToken, requestLogin, receiveLogin, receiveLoginError, loginCall,
};
