import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import tutorClasses from '../styles/tutorList.module.scss';
import twitter from '../img/twitter.png';
import fb from '../img/fb.png';
import setTutors from '../actions/tutorsActions';

export class TutorList extends Component {
  constructor(props) {
    super(props);

    this.token = localStorage.getItem('token');
    this.state = {
      tutors: [],
    };
  }

  componentDidMount() {
    if (this.token) {
      axios.get('http://localhost:3000/tutors', {
        headers: { Authorization: `Bearer ${this.token}` },
      }).then(response => {
        const { setTutors } = this.props;
        setTutors(response.data);
        this.setState({ tutors: response.data });
      }).catch(error => {
      // eslint-disable-next-line no-alert
        alert(error);
      });
    }
  }

  render() {
    const { tutors } = this.state;

    if (!this.token) {
      alert('Please login first');
      return (
        <Redirect to="/" />
      );
    }

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
}

const mapStateToProps = state => ({
  tutors: state.tutors.list,
});

const mapDispatchToProps = dispatch => ({
  setTutors: response => dispatch(setTutors(response)),
});

TutorList.propTypes = {
  setTutors: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TutorList);
