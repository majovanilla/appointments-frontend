import React from 'react';
import PropTypes from 'prop-types';
import tutorClasses from '../styles/tutor.module.scss';
import tutors from '../helpers';

export default function Tutor({ match }) {
  const { id } = match.params;
  const tutor = tutors[id];

  return (
    <div className={tutorClasses.mainDiv}>
      <div className={tutorClasses.tutorImgDiv}>
        <img src={tutor.img} alt="tutor profile" className={tutorClasses.tutorImg} />
      </div>
      <div className={tutorClasses.tutorInfoDiv}>
        <h1 className={tutorClasses.tutorName}>{tutor.name}</h1>
        <div>
          <div className={`${tutorClasses.tutorInfo} ${tutorClasses.tutorInfo__gray}`}>
            <p className={`${tutorClasses.tutorInfo__title}`}>Rate</p>
            <p className={`${tutorClasses.tutorInfo__text}`}>
              {tutor.rate}
            </p>
          </div>
          <div className={tutorClasses.tutorInfo}>
            <p className={`${tutorClasses.tutorInfo__title}`}>Years of experience</p>
            <p className={tutorClasses.tutorInfo__text}>
              {tutor.experience}
            </p>
          </div>
          <div className={`${tutorClasses.tutorInfo} ${tutorClasses.tutorInfo__gray}`}>
            <p className={`${tutorClasses.tutorInfo__title}`}>Subject</p>
            <p className={`${tutorClasses.tutorInfo__text}`}>
              {tutor.subject}
            </p>
          </div>
        </div>
        <p className={tutorClasses.tutorInfo__text}>
          {tutor.about}
        </p>
        <div className={tutorClasses.appointmentButton}>
          Schedule a class
        </div>
      </div>
    </div>
  );
}

Tutor.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
