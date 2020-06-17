import { initApptState } from '../helpers/initStates';

const apptReducer = (state = [initApptState], action) => {
  switch (action.type) {
    case 'SET_APPOINTMENTS':
      return {
        ...state,
        list: action.list,
        fetching: false,
      };

    case 'POST_APPOINTMENT':
      return {
        ...state,
        fetching: true,
      };

    case 'POST_APPOINTMENT_ERROR':
      return {
        ...state,
        fetching: false,
        message: action.error,
      };

    case 'GET_APPOINTMENTS':
      return {
        ...state,
        fetching: true,
      };

    case 'GET_APPOINTMENTS_SUCCESS':
      return {
        ...state,
        list: action.list,
        fetching: false,
      };

    case 'GET_APPOINTMENTS_ERROR':
      return {
        ...state,
        message: action.error,
        fetching: false,
      };

    default:
      return state;
  }
};

export default apptReducer;
