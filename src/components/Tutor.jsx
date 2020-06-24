/* eslint-disable no-alert */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import tutorClasses from '../styles/tutor.module.scss';
import { setToken } from '../actions/authActions';
import { fetchTutor } from '../actions/tutorsActions';
import { checkToken } from '../helpers/token';

export class Tutor extends Component {
  constructor(props) {
    super(props);
    const { match } = props;

    this.state = {
      id: match.params.id,
      tutor: [],
    };
  }

  componentDidMount() {
    const { id } = this.state;
    const { setToken, fetchTutor } = this.props;
    const tokenObj = JSON.parse(localStorage.getItem('tokenObj'));
    const { token } = tokenObj;
    if (token) {
      fetchTutor(id, token).then(() => {
        const { currentTutor } = this.props;
        this.setState({ tutor: currentTutor });
        setToken(token);
      });
    }
  }

  render() {
    const validToken = checkToken();
    const { tutor } = this.state;
    if (!validToken) {
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

const mapStateToProps = state => ({
  currentTutor: state.tutors.currentTutor,
  authToken: state.auth.authToken,
});

const mapDispatchToProps = dispatch => ({
  fetchTutor: (id, token) => dispatch(fetchTutor(id, token)),
  setToken: token => dispatch(setToken(token)),
});

Tutor.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  currentTutor: PropTypes.shape({
    name: PropTypes.string,
    rate: PropTypes.string,
  }),
  setToken: PropTypes.func.isRequired,
  fetchTutor: PropTypes.func.isRequired,
};

Tutor.defaultProps = {
  currentTutor: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Tutor);
