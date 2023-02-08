import React from 'react'
import Experience from "../../../icons/Award.png";
import Completed from "../../../icons/Briefcase.png";
import Support from "../../../icons/Support.png";

const Info = () => {
    return(
        <div className="about__info grid">
            <div className="about__box">
            <img src={Experience} alt="Experience-img" className="Experience-img about-img"/>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">3 Years Working</span>
            </div>
            <div className="about__box">
            <img src={Completed} alt="Completed-img" className="Completed-img about-img" />
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">+12 Projects</span>
            </div>
            <div className="about__box">
            <img src={Support} alt="Support-img" className="Support-img about-img" />
                <h3 className="about__title">Support</h3>
                <span className="about__subtitle">Online 24/7</span>
            </div>
        </div>
    )
}

export default Info