import React from 'react'
import Facebook from '../../../icons/Facebook.png';
import Linkedin from '../../../icons/Linkedin.png';
import Twitter from '../../../icons/Twitter.png';
import Whatsapp from '../../../icons/Whatsapp.png';

const Social = () =>{
    return(
        <div className="home__social">
            <a href="" className="home__social-icon" target="_blank">
            <img src={Whatsapp} alt="Whatsapp-social-media" className="about-img" />
            </a>
            <a href="" className="home__social-icon" target="_blank">
            <img src={Twitter} alt="Twitter-social-media" className="about-img" />
            </a>
            <a href="" className="home__social-icon" target="_blank">
            <img src={Linkedin} alt="Linkedin-social-media" className="about-img" />
            </a>
            <a href="" className="home__social-icon" target="_blank">
            <img src={Facebook} alt="Facebook-social-media" className="about-img" />
            </a>
        </div>
    )
}

export default Social;