import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import homeClasses from '../styles/home.module.scss';
import Login from './auth/Login';

export default function Home(props) {
  const token = localStorage.getItem('token');

  return (
    <div className={homeClasses.bgImage}>
      <Login />
    </div>
  );
}