const initState = {
  authToken: '',
  loggedIn: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        authToken: action.authToken,
      };
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.currentUser,
      };
    case 'LOGGED_IN':
      return {
        ...state,
        loggedIn: action.loggedIn,
      };
    default:
      return state;
  }
};

export default authReducer;
