const initState = {
  authToken: '',
};

const authReducer = (state = initState, action) => {
  if (action.type === 'SET_TOKEN') {
    return {
      ...state,
      authToken: action.authToken,
    };
  }

  return state;
};

export default authReducer;
