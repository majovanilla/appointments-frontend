import React, { Component } from 'react';
import axios from 'axios';

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      message: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const {
      name, email, password,
    } = this.state;

    axios.post('http://localhost:3000/signup', {
      name,
      email,
      password,
    }).then(response => {
      console.log('response', response);
    }).catch(error => {
      console.log('error', error);
    });
    event.preventDefault();
  }


  render() {
    const {
      name, email, password,
    } = this.state;

    return (
      <div>
        <h1>This is the Signup form</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="name" name="name" placeholder="Name" value={name} onChange={this.handleChange} required />
          <input type="email" name="email" placeholder="Email" value={email} onChange={this.handleChange} required />
          <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange} required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}
