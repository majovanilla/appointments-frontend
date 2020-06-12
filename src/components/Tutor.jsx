/* eslint-disable no-alert */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import tutorClasses from '../styles/tutor.module.scss';

export default class Tutor extends Component {
  constructor(props) {
    super(props);
    const { match } = props;

    this.token = localStorage.getItem('token');
    this.state = {
      id: match.params.id,
      tutor: {},
    };
  }

  componentDidMount() {
    const { id } = this.state;
    if (this.token) {
      axios.get(`https://appointments-api-majovanilla.herokuapp.com/tutors/${id}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      }).then(response => {
        this.setState({ tutor: response.data });
      }).catch(error => {
        alert(error);
      });
    }
  }

  render() {
    const { tutor } = this.state;

    if (!this.token) {
      alert('Please login first');
      return (
        <Redirect to="/" />
      );
    }

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
          <Link
            to={{
              pathname: '/appointments/new',
              tutorId: tutor.id,
            }}
            className={tutorClasses.appointmentButton}
          >
            Schedule a class
          </Link>
        </div>
      </div>
    );
  }
}

Tutor.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
