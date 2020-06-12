import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import homeClasses from '../styles/home.module.scss';
// import { TutorList } from '../components/TutorList';
import Login from './auth/Login';

export default function Home(props) {
  // const { loggedIn } = props;
  const token = localStorage.getItem('token');

  return (
    <div className={homeClasses.bgImage}>
      <Login />
    </div>
    // <Redirect to="/tutors" />
  );
}

// const mapStateToProps = state => ({
//   loggedIn: state.auth.loggedIn,
// });


// Home.propTypes = {
//   loggedIn: PropTypes.bool.isRequired,
// };


// export default connect(mapStateToProps)(Home);
