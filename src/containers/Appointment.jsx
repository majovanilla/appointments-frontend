import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import appClasses from '../styles/appointment.module.scss';

export default class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      date: new Date(),
      time: new Date(),
      message: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const {
      location, date, time,
    } = this.state;

    console.log('tutor id: ', this.props.history);
    const { tutorId } = this.props.history.location;

    axios.post('http://localhost:3000/appointments/new', {
      location,
      date,
      time,
      tutor_id: tutorId,
    }).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
      // this.setState({ message: error });
    });
    event.preventDefault();
  }

  render() {
    const { date } = this.state;

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
              className={`${appClasses.datePicker} ${appClasses.input} `}
              selected={date}
              onChange={date => date(date)}
            />
          </div>
          <div className={appClasses.datePickerDiv}>
            <DatePicker
              className={`${appClasses.datePicker} ${appClasses.input} ${appClasses.input__small}`}
              selected={date}
              onChange={date => date(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />
          </div>
        </div>
        <div className={appClasses.bookButton}>Book Now</div>
      </div>
    );
  }
}

Appointment.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      tutorId: PropTypes.number.isRequired,
    }),
  }).isRequired,
};
