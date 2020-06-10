import React, { Component } from 'react';
import navClasses from '../styles/navbar.module.scss';
import hambWhite from '../img/hamb.png';
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
  }

  handleToggle(event) {
    if (event.target.alt === 'toggle icon') {
      const { visible } = this.state;
      this.setState({ visible: !visible });
    }
  }

  render() {
    const { visible } = this.state;
    const visibleClass = visible ? navClasses.navToggle__visible : navClasses.navToggle__invisible;
    const hamburger = visible ? hambBlack : hambWhite;
    return (
      <div className={navClasses.navbar}>
        <div className={navClasses.hambugerDiv}>
          <img src={hamburger} alt="toggle icon" className={navClasses.hambugerButton} onClick={this.handleToggle} />
        </div>
        <div className={`${navClasses.navToggle} ${visibleClass}`}>
          <ul className={navClasses.navMenu}>
            <li className={navClasses.navItem}>Home</li>
            <li className={navClasses.navItem}>Login</li>
            <li className={navClasses.navItem}>Sign Up</li>
            <li className={navClasses.navItem}>Appointments</li>
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
