import axios from 'axios';
import { PROD_URL } from '../helpers/constants';

export function requestTutors() {
  return {
    type: 'REQUEST_TUTORS',
  };
}

export function receiveTutors(list) {
  return {
    type: 'RECEIVE_TUTORS',
    list,
  };
}

export function receiveTutorsError(error) {
  return {
    type: 'RECEIVE_TUTORS_ERROR',
    error,
  };
}

export function tutorsCall(token) {
  return dispatch => {
    dispatch(requestTutors());
    return axios.get(`${PROD_URL}/tutors`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(response => {
      dispatch(receiveTutors(response.data));
    }).catch(error => {
      dispatch(receiveTutorsError(error));
    });
  };
}
