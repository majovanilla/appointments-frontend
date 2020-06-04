export default function setToken(authToken) {
  return {
    type: 'SET_TOKEN',
    authToken,
  };
}
// const getToken = authToken => ({
//   type: 'GET_TOKEN',
//   authToken,
// });

// export { setToken, getToken };
