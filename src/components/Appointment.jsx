import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';
import appClasses from '../styles/appointment.module.scss';

export default function Appointment({ history }) {
  const { tutorId } = history.location;
  const [startDate, setStartDate] = useState(new Date());

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
        <select className={appClasses.input} name="location" id="place-selector">
          <option value="london">London</option>
          <option value="new york">New York</option>
          <option value="mexico city">Mexico City</option>
          <option value="rwanda">Rwanda</option>
        </select>
        <div className={appClasses.datePickerDiv}>
          <DatePicker
            className={`${appClasses.datePicker} ${appClasses.input} `}
            selected={startDate}
            onChange={date => setStartDate(date)}
          />
        </div>
        <div className={appClasses.datePickerDiv}>
          <DatePicker
            className={`${appClasses.datePicker} ${appClasses.input} ${appClasses.input__small}`}
            selected={startDate}
            onChange={date => setStartDate(date)}
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

Appointment.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      tutorId: PropTypes.number.isRequired,
    }),
  }).isRequired,
};
