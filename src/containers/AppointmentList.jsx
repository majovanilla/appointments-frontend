import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import appClasses from '../styles/appointmentList.module.scss';

class AppointmentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [
        {
          id: 1,
          location: 'London',
          tutor_id: 1,
          canceled: false,
          created_at: '2020-06-08 16:51:35',
          updated_at: '2020-06-08 16:51:35',
          user_id: 1,
          date: '2020-07-05',
          time: '1  8:00:00',
        },
        {
          id: 2,
          location: 'Mexico City',
          tutor_id: 1,
          canceled: false,
          created_at: '2020-06-08 16:51:35',
          updated_at: '2020-06-08 16:51:35',
          user_id: 1,
          date: '2020-07-05',
          time: '15:00:00',
        },
        {
          id: 3,
          location: 'Mexico City',
          tutor_id: 1,
          canceled: false,
          created_at: '2020-06-08 16:51:35',
          updated_at: '2020-06-08 16:51:35',
          user_id: 1,
          date: '2020-07-05',
          time: '15:00:00',
        },
        {
          id: 4,
          location: 'Mexico City',
          tutor_id: 1,
          canceled: false,
          created_at: '2020-06-08 16:51:35',
          updated_at: '2020-06-08 16:51:35',
          user_id: 1,
          date: '2020-07-05',
          time: '15:00:00',
        },
        {
          id: 5,
          location: 'Mexico City',
          tutor_id: 1,
          canceled: false,
          created_at: '2020-06-08 16:51:35',
          updated_at: '2020-06-08 16:51:35',
          user_id: 1,
          date: '2020-07-05',
          time: '15:00:00',
        },
        {
          id: 6,
          location: 'Mexico City',
          tutor_id: 1,
          canceled: false,
          created_at: '2020-06-08 16:51:35',
          updated_at: '2020-06-08 16:51:35',
          user_id: 1,
          date: '2020-07-05',
          time: '15:00:00',
        },
        {
          id: 7,
          location: 'Mexico City',
          tutor_id: 1,
          canceled: false,
          created_at: '2020-06-08 16:51:35',
          updated_at: '2020-06-08 16:51:35',
          user_id: 1,
          date: '2020-07-05',
          time: '15:00:00',
        },
      ],
    };
  }

  render() {
    const { currentUser } = this.props;
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
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
});

AppointmentList.propTypes = {
  currentUser: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(AppointmentList);
