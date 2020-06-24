import axios from 'axios';
import { PROD_URL } from '../helpers/constants';

export function setAppointments(list) {
  return {
    type: 'SET_APPOINTMENTS',
    list,
  };
}

export function postAppointment() {
  return {
    type: 'POST_APPOINTMENT',
  };
}

export function postAppointmentError() {
  return {
    type: 'POST_APPOINTMENT_ERROR',
  };
}

export function getAppointments() {
  return {
    type: 'GET_APPOINTMENTS',
  };
}

export function getAppointmentsSuccess(list) {
  return {
    type: 'GET_APPOINTMENTS_SUCCESS',
    list,
  };
}

export function getAppointmentsError(error) {
  return {
    type: 'GET_APPOINTMENTS_ERROR',
    error,
  };
}

export function apptCall(token) {
  return dispatch => {
    dispatch(getAppointments());
    return axios.get(`${PROD_URL}/appointments`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response => {
      dispatch(getAppointmentsSuccess(response.data));
    }).catch(error => {
      dispatch(getAppointmentsError(error));
    });
  };
}

export function postApptCall(token, data) {
  return dispatch => {
    dispatch(postAppointment());
    return axios.post(`${PROD_URL}/appointments/new`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        dispatch(setAppointments(response.data));
      }).catch(error => {
        dispatch(postAppointmentError(error));
      });
  };
}
