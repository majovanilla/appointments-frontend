const initState = {
  authToken: '',
  currentUser: '',
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
    default:
      return state;
  }
};

export default authReducer;
