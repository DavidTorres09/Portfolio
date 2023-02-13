import React from 'react'
import "./about.css"
import AboutImg from "../../../images/lion.png";
import CV from "../../../files/CV.pdf";
import Info from "./info";


const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section_title">About Me</h2>
            <span className="section_subtitle">My Introduction</span>
            <div className="about__container container grid">
                <img src={AboutImg} alt="about--img" className="about__img" />
                <div className="about__data">
                    <Info/>
                    <p className="about__description">Building the future, one line of code at a time...I am a software developer, specialized in building applications and computer systems. I have skills in various programming languages ​​and development tools, and I am able to work in teams and collaborate with other departments to ensure the delivery of high-quality projects. My goal is to produce efficient and scalable solutions that meet the needs of users and solve real problems.
                    </p>
                    <a download=""href={CV} className="button button--flex">Download CV</a>
                </div>
            </div>
        </section>
    )
}

export default About