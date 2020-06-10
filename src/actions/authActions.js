function setToken(authToken) {
  return {
    type: 'SET_TOKEN',
    authToken,
  };
}

function setLogin(status) {
  return {
    type: 'SET_LOGIN',
    status,
  };
}

export { setToken, setLogin };
