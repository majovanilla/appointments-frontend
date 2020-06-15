import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { loginCall } from '../../actions/authActions';
import loginClasses from '../../styles/auth.module.scss';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
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
      email, password,
    } = this.state;

    const { loginCall } = this.props;
    event.preventDefault();
    loginCall(email, password);
    this.setState({ email: '', password: '' });
  }

  render() {
    const {
      email, password,
    } = this.state;

    const token = localStorage.getItem('token');
    if (token) { return (<Redirect to="/tutors" />); }

    return (
      <div className={`${loginClasses.mainDiv} ${loginClasses.mainDiv__yellow}`}>
        <div className={loginClasses.bgImage} />
        <h1 className={loginClasses.mainTitle}>
          Welcome to the best resource
          <br />
          of teachers on the web!
        </h1>
        <form className={loginClasses.formDiv} onSubmit={this.handleSubmit}>
          <input type="email" name="email" placeholder="Email" value={email} onChange={this.handleChange} required />
          <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange} required />
          <button type="submit">Login</button>
        </form>
        <p className={loginClasses.linkName}>
          Not a user?
          <span><Link to="/auth/signup" className={loginClasses.link}>Sign Up</Link></span>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authToken: state.auth.authToken,
  message: state.auth.message,
  fetching: state.auth.fetching,
});

const mapDispatchToProps = dispatch => ({
  loginCall: (email, password) => dispatch(loginCall(email, password)),
});

Login.propTypes = {
  loginCall: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
