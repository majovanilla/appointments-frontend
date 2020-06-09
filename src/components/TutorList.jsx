import React from 'react';
import { Link } from 'react-router-dom';
import tutorClasses from '../styles/tutorList.module.scss';
import tutors from '../helpers';
import twitter from '../img/twitter.png';
import fb from '../img/fb.png';

export default function TutorList() {
  return (
    <div className={tutorClasses.mainDiv}>
      <div className={tutorClasses.prevButton}>
        <span>&lt;</span>
      </div>
      <div className={tutorClasses.title}>
        <h1 className={tutorClasses.mainTitle}>Best Tutors</h1>
        <h2 className={tutorClasses.subTitle}>Choose your teacher</h2>
        <div className={tutorClasses.divisor}>
          <p>************</p>
        </div>
      </div>
      {tutors.map(tutor => (
        <div key={tutor.id} className={tutorClasses.tutorDiv}>
          <Link to={`/tutors/${tutor.id}`}>
            <img className={tutorClasses.tutorPic} src={tutor.img} alt="Tutor profile" />
          </Link>
          <div className={tutorClasses.tutorInfo}>
            <p className={tutorClasses.tutorName}>{tutor.name}</p>
            <div className={tutorClasses.divisor}>
              <p>************</p>
            </div>
            <p className={tutorClasses.about}>{tutor.about}</p>
          </div>
          <div className={tutorClasses.socialDiv}>
            <img className={tutorClasses.socialIcon} src={twitter} alt="twitter logo" />
            <img className={tutorClasses.socialIcon} src={fb} alt="Facebook logo" />
          </div>
        </div>
      ))}
      <div className={tutorClasses.nextButton}>
        <span>&gt;</span>
      </div>
    </div>
  );
}
