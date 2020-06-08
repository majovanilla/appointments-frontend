function setToken(authToken) {
  return {
    type: 'SET_TOKEN',
    authToken,
  };
}

// const getToken = authToken => ({
//   type: 'GET_TOKEN',
//   authToken,
// });

function setCurrentUser(currentUser) {
  return {
    type: 'SET_CURRENT_USER',
    currentUser,
  };
}

function loggedIn(status) {
  return {
    type: 'LOGGED_IN',
    loggedIn: status,
  };
}

export { setToken, setCurrentUser, loggedIn };
