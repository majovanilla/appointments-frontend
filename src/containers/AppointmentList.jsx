/* eslint-disable no-alert */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import appClasses from '../styles/appointmentList.module.scss';

export class AppointmentList extends Component {
  constructor(props) {
    super(props);

    this.token = localStorage.getItem('token');
    this.state = {
      appointments: [],
    };
  }

  componentDidMount() {
    if (this.token) {
      const cors = 'https://cors-anywhere.herokuapp.com/';
      axios.post(`${cors}https://appointments-api-majovanilla.herokuapp.com/appointments`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }).then(response => {
        this.setState({ appointments: response.data });
      }).catch(error => {
        alert(error);
      });
    }
  }

  render() {
    const { appointments } = this.state;

    if (!this.token) {
      alert('Please login first');
      return (<Redirect to="/" />);
    }

    return (
      <div className={appClasses.mainDiv}>
        <div className={appClasses.bgImage} />
        <h1 className={appClasses.mainTitle}>Your Appointments:</h1>
        <div className={appClasses.appointmentsDiv}>
          {appointments.map(appointment => (
            <ul className={appClasses.appointment} key={appointment.id}>
              <li className={`${appClasses.tutor} ${appClasses.appElement}`}>
                Tutor:
                <span className={appClasses.spanInfo}>{appointment.tutor_id}</span>
              </li>
              <li className={`${appClasses.location} ${appClasses.appElement}`}>
                Location:
                <span className={appClasses.spanInfo}>{appointment.location}</span>
              </li>
              <li className={`${appClasses.date} ${appClasses.appElement}`}>
                Date:
                <span className={appClasses.spanInfo}>{appointment.date}</span>
              </li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authToken: state.auth.authToken,
});

export default connect(mapStateToProps)(AppointmentList);
