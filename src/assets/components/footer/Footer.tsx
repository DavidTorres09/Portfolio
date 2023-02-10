import React from 'react'
import './Footer.css'
import Facebook from '../../../icons/Facebook.png';
import Linkedin from '../../../icons/Linkedin.png';
import Twitter from '../../../icons/Twitter.png';
import Whatsapp from '../../../icons/Whatsapp.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer__container container">
        <h1 className="footer__title">Angel</h1>

        <ul className="footer__list">
          <li><a href="#about" className="footer__link"></a>About</li>
          <li><a href="#portfolio" className="footer__link"></a>Projects</li>
          <li><a href="#contact" className="footer__link"></a>Contact</li>
        </ul>

        <div className="footer__social">
          <a href="https://api.whatsapp.com/send?phone=50660246577&text=Hello,more%20information" className="footer__social-icon" target="_blank">
            <img src={Whatsapp} alt="Whatsapp-social-media" className="about-img" />
          </a>
          <a href="https://twitter.com/" className="footer__social-icon" target="_blank">
            <img src={Twitter} alt="Twitter-social-media" className="about-img" />
          </a>
          <a href="https://www.linkedin.com/" className="footer__social-icon" target="_blank">
            <img src={Linkedin} alt="Linkedin-social-media" className="about-img" />
          </a>
          <a href="https://www.facebook.com/" className="footer__social-icon" target="_blank">
            <img src={Facebook} alt="Facebook-social-media" className="about-img" />
          </a>
        </div>

        <span className="footer__copy">&#169; AngelTorres. All rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer