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

export function getTutor() {
  return {
    type: 'GET_TUTOR',
  };
}

export function getTutorSuccess(tutor) {
  return {
    type: 'GET_TUTOR_SUCCESS',
    tutor,
  };
}

export function getTutorError(error) {
  return {
    type: 'GET_TUTOR_ERROR',
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

export function fetchTutor(id, token) {
  return dispatch => {
    dispatch(getTutor());
    return axios.get(`${PROD_URL}/tutors/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(response => {
      dispatch(getTutorSuccess(response.data));
    }).catch(error => {
      dispatch(getTutorError(error));
    });
  };
}
