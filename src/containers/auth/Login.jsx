import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { setToken, loggedIn } from '../../actions/authActions';
import loginClasses from '../../styles/auth.module.scss';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
      email, password,
    } = this.state;


    axios.post('http://localhost:3000/auth/login', {
      email,
      password,
    }).then(response => {
      const { setToken, loggedIn } = this.props;
      setToken(response);
      loggedIn(true);
    }).catch(error => {
      this.setState({ message: error.response.data.message });
    });
    event.preventDefault();
  }


  render() {
    const {
      email, password,
    } = this.state;

    const { loggedIn } = this.props;

    if (loggedIn) {
      return (
        <Redirect to="/tutors" />
      );
    }
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
        <p>
          Not a user?
          <span><Link to="/" className={loginClasses.link}>Sign Up</Link></span>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authToken: state.auth.authToken,
  currentUser: state.auth.currentUser,
});

const mapDispatchToProps = dispatch => ({
  setToken: response => {
    dispatch(setToken(response.data.auth_token));
  },
  loggedIn: status => {
    dispatch(loggedIn(status));
  },
});

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
  loggedIn: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);