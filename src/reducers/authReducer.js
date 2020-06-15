const initState = {
  authToken: '',
  fetching: false,
  loggedIn: false,
  message: '',
};

const authReducer = (state = initState, action) => {
  let token;
  // console.log(action.authToken)
  switch (action.type) {
    case 'SET_TOKEN':
      token = localStorage.setItem('token', action.authToken);
      return {
        ...state,
        authToken: token,
      };

    case 'REQUEST_LOGIN':
      return {
        ...state,
        fetching: true,
      };

    case 'RECEIVE_LOGIN':
      token = localStorage.setItem('token', action.authToken);
      return {
        ...state,
        fetching: false,
        authToken: token,
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
