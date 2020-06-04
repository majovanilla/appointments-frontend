export default function setToken(authToken) {
  return {
    type: 'SET_TOKEN',
    authToken,
  };
}
