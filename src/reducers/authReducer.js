const initState = {
  authToken: '',
  currentUser: 'no user',
  loggedIn: false,
};

const authReducer = (state = initState, action) => {
  let token;
  switch (action.type) {
    case 'SET_TOKEN':
      token = localStorage.setItem('token', action.authToken);
      return {
        ...state,
        authToken: token,
      };
    default:
      return state;
  }
};

export default authReducer;
