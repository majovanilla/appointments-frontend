import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import appClasses from '../styles/appointmentList.module.scss';

export class AppointmentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appointments: [],
    };
  }

  componentDidMount() {
    const authToken = localStorage.getItem('token');
    axios.get('https://appointments-api-majovanilla.herokuapp.com/appointments',
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then(response => {
        this.setState({ appointments: response.data });
      }).catch(error => {
        // eslint-disable-next-line no-alert
        alert(error);
      });
  }

  render() {
    const { tutors } = this.props;
    const { appointments } = this.state;
    return (
      <div className={appClasses.mainDiv}>
        <div className={appClasses.bgImage} />
        <h1 className={appClasses.mainTitle}>Your Appointments:</h1>
        <div className={appClasses.appointmentsDiv}>
          {appointments.map(appointment => (
            <ul className={appClasses.appointment} key={appointment.id}>
              <li className={`${appClasses.tutor} ${appClasses.appElement}`}>
                Tutor:
                <span className={appClasses.spanInfo}>{`${tutors}[${appointment.tutor_id}]`}</span>
              </li>
              <li className={`${appClasses.location} ${appClasses.appElement}`}>
                Location:
                <span className={appClasses.spanInfo}>{appointment.location}</span>
              </li>
              <li className={`${appClasses.date} ${appClasses.appElement}`}>
                Date:
                <span className={appClasses.spanInfo}>{appointment.date}</span>
              </li>
              <li className={`${appClasses.time} ${appClasses.appElement}`}>
                Time:
                <span className={appClasses.spanInfo}>{appointment.time}</span>
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
  tutors: state.tutors.list,
});

AppointmentList.propTypes = {
  tutors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(AppointmentList);
