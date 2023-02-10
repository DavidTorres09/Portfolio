import React from 'react'
import './qualification.css';
import Education from '../../../icons/Education.png';
import Experience from '../../../icons/Experience.png';
import Calendar from '../../../icons/Calendar.png';

const Qualification = () => {
    return (
        <section className="qualification section">
            <h2 className="section_title">Qualification</h2>
            <span className="section_subtitle">My personal journey</span>
            <div className="qualification__container container">
                <div className="qualification_tabs">
                    <div className="qualification__button button--flex">
                        <img src={Education} alt="Eduaction_icon" className="experience-img" />
                        Education
                    </div>
                    <div className="qualification__button button--flex">
                        <img src={Experience} alt="Experience_icon" className="experience-img" />
                        Experience
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className="qualification__content qualifications_content-active">
                        <div className="qualification__data">
                            <div className='abc'>
                                <h3 className="qualification__title">Systems engineer</h3>
                                <span className="qualification__subtitle">Costa Rica - Fidelitas</span>
                                <div className="qualification__calender">
                                    <img src={Calendar} alt="Experience_icon" className="calendar-img" />2021- Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Web design</h3>
                                <span className="qualification__subtitle">Costa Rica - Autodidact</span>
                                <div className="qualification__calender">
                                    <img src={Calendar} alt="Experience_icon" className="calendar-img" />2021- Present
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle">Costa Rica - Fidelitas</span>
                                <div className="qualification__calender">
                                    <img src={Calendar} alt="Experience_icon" className="calendar-img" />2021- Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">UX / UI</h3>
                                <span className="qualification__subtitle">Costa Rica - Autodidact</span>
                                <div className="qualification__calender">
                                    <img src={Calendar} alt="Experience_icon" className="calendar-img" />2021- Present
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="qualification__content">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Product Designer</h3>
                                <span className="qualification__subtitle">Costa Rica - Fidelitas</span>
                                <div className="qualification__calender">
                                    <img src={Calendar} alt="Experience_icon" className="calendar-img" />2021- Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">UX Designer</h3>
                                <span className="qualification__subtitle">Costa Rica - Autodidact</span>
                                <div className="qualification__calender">
                                    <img src={Calendar} alt="Experience_icon" className="calendar-img" />2021- Present
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Designer</h3>
                                <span className="qualification__subtitle">Costa Rica - Fidelitas</span>
                                <div className="qualification__calender">
                                    <img src={Calendar} alt="Experience_icon" className="calendar-img" />2021- Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Qualification