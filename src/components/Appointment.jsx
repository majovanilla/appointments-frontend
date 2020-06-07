import React from 'react';
import appClasses from '../styles/appointment.module.scss';

export default function Appointment(props) {
  const { tutorId } = props;
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
        <select name="places" id="cars">
          <option value="London">London</option>
          <option value="New York">New York</option>
          <option value="Mexico City">Mexico City</option>
          <option value="Rwanda">Rwanda</option>
        </select>
        <div className={appClasses.bookButton}>Book Now</div>
      </div>
    </div>
  );
}
