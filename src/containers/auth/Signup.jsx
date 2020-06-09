import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { setToken, setLogin } from '../../actions/authActions';
import signupClasses from '../../styles/auth.module.scss';

class Signup extends Component {
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
      const { setToken, setLogin } = this.props;
      setToken(response);
      setLogin(true);
    }).catch(response => {
      this.setState({ message: response });
    });
    event.preventDefault();
  }


  render() {
    const {
      name, email, password, message,
    } = this.state;

    const { loggedIn } = this.props;

    if (loggedIn === true) { return (<Redirect to="/tutors" />); }

    // if (message !== '') {
    //   alert(message);
    // }

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
  loggedIn: state.auth.loggedIn,
  // currentUser: state.auth.currentUser,
});

const mapDispatchToProps = dispatch => ({
  setToken: response => dispatch(setToken(response.data.auth_token)),
  setLogin: status => dispatch(setLogin(status)),
});

Signup.propTypes = {
  setLogin: PropTypes.func.isRequired,
  setToken: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
