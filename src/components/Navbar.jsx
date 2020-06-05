import React from 'react';
import navClasses from '../styles/navbar.module.scss';
import hambWhite from '../img/hamb.png';
import hambBlack from '../img/hamb-black.png';
import fb from '../img/fb.png';
import twitter from '../img/twitter.png';
import google from '../img/google.png';
import pinterest from '../img/pinterest.png';
import vimeo from '../img/vimeo.png';

export default function Navbar() {
  return (
    <div className={navClasses.navbar}>
      <div>
        <img src={hambBlack} alt="toggle menu icon" className={navClasses.hambugerButton} />
      </div>
      <div className={navClasses.navToggle}>
        <ul className={navClasses.navMenu}>
          <li className={navClasses.navItem}>Home</li>
          <li className={navClasses.navItem}>Login</li>
          <li className={navClasses.navItem}>Sign Up</li>
          <li className={navClasses.navItem}>My Appointments</li>
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
