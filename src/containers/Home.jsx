import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import homeClasses from '../styles/home.module.scss';

export function Home(props) {
  const { loggedIn } = props;

  if (loggedIn === false) { return (<Redirect to="/auth/login" />); }

  return (
    <div className={homeClasses.home}>
      <div className={homeClasses.bgImage} />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
});


Home.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};


export default connect(mapStateToProps)(Home);
