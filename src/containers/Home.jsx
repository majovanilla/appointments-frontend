import React, { Component } from 'react';
import Signup from './auth/Signup';
import homeClasses from '../styles/home.module.scss';

export default class Home extends Component {
  render() {
    return (
      <div className={homeClasses.home}>
        <div className={homeClasses.bgImage} />
        <Signup />
      </div>
    );
  }
}
