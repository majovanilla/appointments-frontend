/* eslint-disable no-alert */
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import tutorClasses from '../styles/tutorList.module.scss';
import twitter from '../img/twitter.png';
import fb from '../img/fb.png';
import { tutorsCall, receiveTutors } from '../actions/tutorsActions';
import { setToken } from '../actions/authActions';
import { checkToken } from '../helpers/token';

export class TutorList extends Component {
  componentDidMount() {
    const { tutorsCall, setToken } = this.props;
    const tokenObj = JSON.parse(localStorage.getItem('tokenObj'));
    setToken(tokenObj.token);
    const { authToken } = this.props;
    if (authToken) {
      tutorsCall(authToken);
    }
  }

  render() {
    const validToken = checkToken();

    if (validToken === false) {
      alert('Please login first');
      return (
        <Redirect to="/" />
      );
    }

    const { tutors } = this.props;

    return (
      <div className={tutorClasses.mainDiv}>

        <div className={tutorClasses.title}>
          <h1 className={tutorClasses.mainTitle}>Best Tutors</h1>
          <h2 className={tutorClasses.subTitle}>Choose your teacher</h2>
          <div className={tutorClasses.divisor}>
            <p>************</p>
          </div>
        </div>
        <div className={tutorClasses.prevButton}>
          <span>&lt;</span>
        </div>
        {tutors.map(tutor => (
          <div key={tutor.id} className={tutorClasses.tutorDiv}>
            <Link to={`/tutors/${tutor.id}`}>
              <img className={tutorClasses.tutorPic} src={tutor.img} alt="Tutor profile" />
              <div className={tutorClasses.tutorInfo}>
                <p className={tutorClasses.tutorName}>{tutor.name}</p>
                <div className={tutorClasses.divisor}>
                  <p>************</p>
                </div>
                <p className={tutorClasses.about}>{tutor.about}</p>
              </div>
            </Link>
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
}

const mapStateToProps = state => ({
  tutors: state.tutors.list,
  fetching: state.fetching,
  authToken: state.auth.authToken,
});

const mapDispatchToProps = dispatch => ({
  tutorsCall: token => dispatch(tutorsCall(token)),
  receiveTutors: response => dispatch(receiveTutors(response.data)),
  setToken: token => dispatch(setToken(token)),
});

TutorList.propTypes = {
  tutorsCall: PropTypes.func.isRequired,
  setToken: PropTypes.func.isRequired,
  authToken: PropTypes.string.isRequired,
  tutors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TutorList);
