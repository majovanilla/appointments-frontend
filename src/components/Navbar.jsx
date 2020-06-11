import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import navClasses from '../styles/navbar.module.scss';
import hambBlack from '../img/hamb-black.png';
import fb from '../img/fb.png';
import twitter from '../img/twitter.png';
import google from '../img/google.png';
import pinterest from '../img/pinterest.png';
import vimeo from '../img/vimeo.png';

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleToggle(event) {
    const { visible } = this.state;
    if (event.target.alt === 'toggle icon') {
      this.setState({ visible: !visible });
    }
  }

  handleLogOut() {
    const { visible } = this.state;
    localStorage.removeItem('token');
    this.setState({ visible: !visible });
  }

  render() {
    const { visible } = this.state;
    const visibleClass = visible ? navClasses.navToggle__visible : navClasses.navToggle__invisible;

    return (
      <div className={navClasses.navbar}>
        <button type="button" className={navClasses.hambugerDiv} onClick={this.handleToggle}>
          <img src={hambBlack} alt="toggle icon" className={navClasses.hambugerButton} />
        </button>
        <div className={`${navClasses.navToggle} ${visibleClass}`}>
          <ul className={navClasses.navMenu}>
            <li className={navClasses.navItem}><Link to="/" className={navClasses.navItem}>Tutors</Link></li>
            <li className={navClasses.navItem}><Link to="/" className={navClasses.navItem} onClick={this.handleLogOut}>Log out</Link></li>
            <li className={navClasses.navItem}><Link to="/appointments" className={navClasses.navItem}>Appointments</Link></li>
          </ul>
          <div className={navClasses.socialDiv}>
            <img className={navClasses.socialIcon} src={twitter} alt="twitter logo" />
            <img className={navClasses.socialIcon} src={fb} alt="Facebook logo" />
            <img className={navClasses.socialIcon} src={google} alt="Google logo" />
            <img className={navClasses.socialIcon} src={vimeo} alt="vimeo logo" />
            <img className={navClasses.socialIcon} src={pinterest} alt="pinterest logo" />
          </div>
        </div>
      </div>
    );
  }
}
