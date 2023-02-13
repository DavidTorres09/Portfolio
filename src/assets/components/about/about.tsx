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
                    <p className="about__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam temporibus aut eos non assumenda consectetur dignissimos est obcaecati facere ducimus! Iure perspiciatis eius accusantium saepe mollitia hic nesciunt magni amet. Quaerat eaque odit, eligendi inventore illo dolor facere veniam illum error sequi aperiam at, velit voluptate eius repellat sapiente incidunt iure vel accusantium quo iusto? Quasi velit, corrupti sed, modi porro temporibus, nesciunt voluptatem recusandae at est illo neque dolorum aliquam. Sapiente doloribus sit accusantium adipisci, ratione, placeat, maiores vel molestias obcaecati inventore dolorem necessitatibus hic ab neque iusto veniam labore tenetur quae eius praesentium est deserunt. Pariatur, deleniti culpa.
                    </p>
                    <a download=""href={CV} className="button button--flex">Download CV</a>
                </div>
            </div>
        </section>
    )
}

export default About