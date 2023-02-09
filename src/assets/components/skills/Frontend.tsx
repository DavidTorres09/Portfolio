import React from 'react';
import Badge from '../../../icons/Badge.png';

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Frontend Developer</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <img src={Badge} alt="badge-img" className="badge__img" />
                        <div>
                            <h3 className="skills__name">HTML</h3>
                            <span className="skills__level">Medium</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <img src={Badge} alt="badge-img" className="badge__img" />
                        <div>
                            <h3 className="skills__name">CSS</h3>
                            <span className="skills__level">Medium</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <img src={Badge} alt="badge-img" className="badge__img" />
                        <div>
                            <h3 className="skills__name">Javascript</h3>
                            <span className="skills__level">Medium</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <img src={Badge} alt="badge-img" className="badge__img" />
                        <div>
                            <h3 className="skills__name">Typescript</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Frontend
