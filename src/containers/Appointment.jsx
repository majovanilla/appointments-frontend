import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import appClasses from '../styles/appointment.module.scss';
import { setAppointments } from '../actions/apptActions';

export class Appointment extends Component {
  constructor(props) {
    super(props);
    const { history } = this.props;
    const { tutorId } = history.location;

    this.state = {
      location: 'london',
      date: new Date(),
      time: new Date(),
      tutorId,

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleDateChange(date) {
    this.setState({
      date,
    });
  }

  handleTimeChange(time) {
    this.setState({
      time,
    });
  }

  handleSubmit(event) {
    const {
      location, date, time, tutorId,
    } = this.state;

    const data = {
      location,
      date,
      time,
      tutor_id: tutorId,
    };

    const { authToken, history } = this.props;

    axios.post('https://appointments-api-majovanilla.herokuapp.com/appointments/new',
    // axios.post('http://localhost:3000/appointments/new',
      data,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then(response => {
        const { setAppointment } = this.props;
        setAppointment(response.data);
        console.log('reponse', response);
        history.push('/appointments');
      }).catch(error => {
        alert(error);
      });
    event.preventDefault();
  }

  render() {
    const { date, time } = this.state;

    return (
      <div className={appClasses.mainDiv}>
        <div className={appClasses.bgImage} />
        <h1 className={appClasses.mainTitle}>Book a class with your teacher</h1>
        <div className={appClasses.divisor} />
        <div className={appClasses.textDiv}>
          <p>Please select your city and the preferred date</p>
          <p>We will inform you if the tutor is available</p>
          <p>You can check your appointments on the Navbar Menu</p>
          <p>If you wish to cancel your appointment, please do so in advance</p>
        </div>
        <div className={appClasses.buttons}>
          <select className={appClasses.input} name="location" id="place-selector" onChange={this.handleChange}>
            <option value="london">London</option>
            <option value="new york">New York</option>
            <option value="mexico city">Mexico City</option>
            <option value="rwanda">Rwanda</option>
          </select>
          <div className={appClasses.datePickerDiv}>
            <DatePicker
              name="date"
              className={`${appClasses.datePicker} ${appClasses.input} `}
              selected={date}
              dateFormat="dd/MM/yyyy"
              shouldCloseOnSelect
              onChange={date => this.handleDateChange(date)}
            />
          </div>
          <div className={appClasses.datePickerDiv}>
            <DatePicker
              name="time"
              className={`${appClasses.datePicker} ${appClasses.input} ${appClasses.input__small}`}
              selected={time}
              onChange={time => this.handleTimeChange(time)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={60}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />
          </div>
        </div>
        <button type="submit" className={appClasses.bookButton} onClick={this.handleSubmit}>Book Now</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authToken: state.auth.authToken,
  appointments: state.appt.appointments,
});

const mapDispatchToProps = dispatch => ({
  setAppointment: appointments => dispatch(setAppointments(appointments)),
});

Appointment.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    location: PropTypes.shape({
      tutorId: PropTypes.number.isRequired,
    }),
  }).isRequired,
  authToken: PropTypes.string.isRequired,
  setAppointment: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Appointment);
