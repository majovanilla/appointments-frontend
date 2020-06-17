import { initTutorsState } from '../helpers/initStates';

const tutorReducer = (state = initTutorsState, action) => {
  switch (action.type) {
    case 'REQUEST_TUTORS':
    case 'GET_TUTOR':
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
    case 'GET_TUTOR_ERROR':
      return {
        ...state,
        fetching: false,
        message: action.error,
      };

    case 'GET_TUTOR_SUCCESS':
      return {
        ...state,
        fetching: false,
        currentTutor: action.tutor,
      };

    default:
      return state;
  }
};

export default tutorReducer;
