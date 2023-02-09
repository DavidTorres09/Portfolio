import React from 'react';
import Badge from '../../../icons/Badge.png';

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend Developer</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__group">
                        <div className="skills__data">
                            <img src={Badge} alt="badge-img" className="badge__img" />
                            <div>
                                <h3 className="skills__name">React</h3>
                                <span className="skills__level">Basic</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <img src={Badge} alt="badge-img" className="badge__img" />
                            <div>
                                <h3 className="skills__name">Java</h3>
                                <span className="skills__level">Medium</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <img src={Badge} alt="badge-img" className="badge__img" />
                            <div>
                                <h3 className="skills__name">MySQL</h3>
                                <span className="skills__level">Basic</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <img src={Badge} alt="badge-img" className="badge__img" />
                            <div>
                                <h3 className="skills__name">MySQL</h3>
                                <span className="skills__level">Basic</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <img src={Badge} alt="badge-img" className="badge__img" />
                            <div>
                                <h3 className="skills__name">C#</h3>
                                <span className="skills__level">Basic</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <img src={Badge} alt="badge-img" className="badge__img" />
                            <div>
                                <h3 className="skills__name">Git</h3>
                                <span className="skills__level">Basic</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <img src={Badge} alt="badge-img" className="badge__img" />
                            <div>
                                <h3 className="skills__name">FireBase</h3>
                                <span className="skills__level">Basic</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Backend