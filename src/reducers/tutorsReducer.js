import { initTutorsState } from '../helpers/initStates';

const tutorReducer = (state = initTutorsState, action) => {
  switch (action.type) {
    case 'REQUEST_TUTORS':
      return {
        ...state,
        fetching: true,
      };

    case 'RECEIVE_TUTORS':
      return {
        ...state,
        fetching: false,
        list: action.list,
      };

    case 'RECEIVE_TUTORS_ERROR':
      return {
        ...state,
        fetching: false,
        message: action.error,
      };

    default:
      return state;
  }
};

export default tutorReducer;
