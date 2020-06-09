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

// const getToken = authToken => ({
//   type: 'GET_TOKEN',
//   authToken,
// });

// function setCurrentUser(currentUser) {
//   return {
//     type: 'SET_CURRENT_USER',
//     currentUser,
//   };
// }

export { setToken, setLogin };
