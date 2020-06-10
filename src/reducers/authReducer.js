const initState = {
  authToken: '',
  currentUser: 'no user',
  loggedIn: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      localStorage.setItem('token', action.authToken);
      return {
        ...state,
        authToken: action.authToken,
      };
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.currentUser,
      };
    case 'SET_LOGIN':
      return {
        ...state,
        loggedIn: action.status,
      };
    case 'GET_TOKEN':
      return {
        ...state,
        authToken: localStorage.getItem('token'),
      };
    default:
      return state;
  }
};

export default authReducer;
