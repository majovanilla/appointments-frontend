/* eslint-disable no-alert */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import appClasses from '../styles/appointmentList.module.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { apptCall } from '../actions/apptActions';
import { checkToken } from '../helpers/token';

export class AppointmentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appointments: [],
    };
  }

  componentDidMount() {
    const validToken = checkToken();
    const tokenObj = JSON.parse(localStorage.getItem('tokenObj'));
    const { token } = tokenObj;
    if (validToken) {
      const { apptCall } = this.props;
      apptCall(token).then(() => {
        const { appointments } = this.props;
        this.setState({ appointments });
      });
    }
  }

  render() {
    const { fetching } = this.props;
    if (fetching === true) {
      return (
        <Loader
          className="spinner"
          type="Circles"
          color="#00BFFF"
          height={500}
          width={200}
        />
      );
    }

    const validToken = checkToken();
    if (!validToken) {
      return (<Redirect to="/" />);
    }

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
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authToken: state.auth.authToken,
  appointments: state.appt.list,
  fetching: state.appt.fetching,
  tutors: state.tutors.list,
});

const mapDispatchToProps = dispatch => ({
  apptCall: token => dispatch(apptCall(token)),
});

AppointmentList.propTypes = {
  apptCall: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  appointments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentList);
