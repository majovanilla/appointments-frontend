import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import appClasses from '../styles/appointment.module.scss';

export default function Appointment(props) {
  const { tutorId } = props;
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
        <select name="location" id="place-selector">
          <option value="london">London</option>
          <option value="new york">New York</option>
          <option value="mexico city">Mexico City</option>
          <option value="rwanda">Rwanda</option>
        </select>
        <div className={appClasses.datePickerDiv}>
          <DatePicker
            className={appClasses.datePicker}
            selected={startDate}
            onChange={date => setStartDate(date)}
          />
        </div>
        <div className={appClasses.datePickerDiv}>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
          />
        </div>
        <div className={appClasses.bookButton}>Book Now</div>
      </div>
    </div>
  );
}
