import React, { Component } from 'react';
import Registration from './auth/Registration';


export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>This is the Home Page</h1>
        <Registration />
      </div>
    );
  }
}
