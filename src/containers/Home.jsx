import React, { Component } from 'react';
import Signup from './auth/Signup';


export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>This is the Home Page</h1>
        <Signup />
      </div>
    );
  }
}
