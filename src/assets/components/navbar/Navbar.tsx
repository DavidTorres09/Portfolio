import React from "react";
import './Navbar.css'
import Facebook from '../../../icons/Facebook.png';
import Linkedin from '../../../icons/Linkedin.png';
import Twitter from '../../../icons/Twitter.png';
import Whatsapp from '../../../icons/Whatsapp.png';
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav>
      <h1 id="name">Angel Torres Mora</h1>
      <ul>
        <li>
          <a href="#" className="nav-link">HOME</a>
        </li>
        <li>
          <a href="#" className="nav-link">PROJECTS</a>
        </li>
        <li>
          <a href="#" className="nav-link">CONTACT</a>
        </li>
      </ul>
      <div>
        <a href="https://www.whatsapp.com/?lang=es" target="_blank">
          <img src={Whatsapp} alt="" className="about-img" />
        </a>
        <a href="https://twitter.com/" target="_blank">
          <img src={Twitter} alt="" className="about-img" />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <img src={Facebook} alt="" className="about-img" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
          <img src={Linkedin} alt="" className="about-img" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
