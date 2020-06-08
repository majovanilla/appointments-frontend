import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import { setToken } from '../../actions/authActions';
import signupClasses from '../../styles/signup.module.scss';

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
    this.setStateFromResponse = this.setStateFromResponse.bind(this);
  }

  setStateFromResponse(response) {
    const { message } = response.data;
    this.setState({
      message,
    });
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
      this.setStateFromResponse(response);
      const { setToken } = this.props;
      setToken(response);
    }).catch(error => {
      this.setStateFromResponse(error);
    });
    event.preventDefault();
  }


  render() {
    const {
      name, email, password,
    } = this.state;

    return (
      <div className={signupClasses.mainDiv}>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authToken: state.auth.authToken,
});

const mapDispatchToProps = dispatch => ({
  setToken: response => {
    dispatch(setToken(response.data.auth_token));
  },
});

Signup.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
