import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { signUpCall } from '../../actions/authActions';
// import { setToken } from '../../actions/authActions';
import signupClasses from '../../styles/auth.module.scss';
import { checkToken } from '../../helpers/token';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
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
    const { name, email, password } = this.state;

    const data = { name, email, password };

    const { signUpCall } = this.props;
    signUpCall(data);
    event.preventDefault();
  }

  render() {
    const {
      name, email, password,
    } = this.state;

    const validToken = checkToken();
    if (validToken) { return (<Redirect to="/tutors" />); }

    return (
      <div className={`${signupClasses.mainDiv} ${signupClasses.mainDiv__yellow}`}>
        <div className={signupClasses.bgImage} />
        <h1 className={signupClasses.mainTitle}>
          Welcome to the best resource
          <br />
          of teachers on the web!
        </h1>
        <form className={signupClasses.formDiv} onSubmit={this.handleSubmit}>
          <input type="name" name="name" placeholder="Name" value={name} onChange={this.handleChange} required />
          <input type="email" name="email" placeholder="Email" value={email} onChange={this.handleChange} required />
          <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange} required />
          <button type="submit">Sign Up</button>
        </form>
        <p className={signupClasses.linkName}>
          Already a user?
          <span><Link to="/auth/login" className={signupClasses.link}>Login</Link></span>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authToken: state.auth.authToken,
});

const mapDispatchToProps = dispatch => ({
  signUpCall: data => dispatch(signUpCall(data)),
});

Signup.propTypes = {
  signUpCall: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
