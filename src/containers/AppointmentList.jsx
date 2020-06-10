import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import appClasses from '../styles/appointmentList.module.scss';

export function AppointmentList(props) {
  const { appointments } = props;
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

const mapStateToProps = state => ({
  appointments: state.appt.appointments,
});

AppointmentList.propTypes = {
  appointments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(AppointmentList);
