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
    default:
      return state;
  }
};

export default authReducer;
