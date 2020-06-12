import React from 'react';
import homeClasses from '../styles/home.module.scss';
import Login from './auth/Login';

export default function Home() {
  return (
    <div className={homeClasses.bgImage}>
      <Login />
    </div>
  );
}
