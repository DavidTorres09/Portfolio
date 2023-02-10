import React, {useState} from 'react'
import './services.css';

const Services = () => {
    const[toggleState, setToggleState] = useState(0);
    const toggleTab = (index: any) =>{
        setToggleState(index);
    }
    return (
        <section className="services section" id="services">
            <h2 className='section_title'>Services</h2>
            <span className="section_subtitle">What i offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className='uil uil-web-grid services__button-icon'></i>
                        <h3 className="services__title">Product <br /> Developer </h3>
                    </div>
                    <span className="services__button" onClick={()=>toggleTab(1)}>View More{" "} <i className='uil uil-arrow-right services__button-icon'></i></span>
                    <div className={toggleState ===1 ? "services__modal active-modal":"services__modal"}>
                        <div className='services__modal-content'>
                            <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Product Developer </h3>
                            <p className="services__modal-description">Services with more than 3 year of experience. Providing quality work to clients and companies.</p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I develop the user interface.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web Page development.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info"> I position your company brand.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info"> I create tools for your company.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <i className='uil uil-arrow services__button-icon'></i>
                        <h3 className="services__title">Product <br /> UI/UX</h3>
                    </div>
                    <span className="services__button" onClick={()=>toggleTab(2)}>View More <i className='uil uil-arrow-right services__button-icon'></i></span>
                    <div className={toggleState ===2 ? "services__modal active-modal":"services__modal"}>
                        <div className='services__modal-content'>
                            <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Product Developer</h3>
                            <p className="services__modal-description">Services with more than 1 year of experience. Providing quality work to clients and companies.</p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Products with CSS.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Animation of CSS with Javascript</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info"> I create ux elements interactions</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <i className='uil uil-edit services__button-icon'></i>
                        <h3 className="services__title">About <br/> More...</h3>
                    </div>
                    <span className="services__button" onClick={()=>toggleTab(3)}>View More <i className='uil uil-arrow-right services__button-icon'></i></span>
                    <div className={toggleState ===3 ? "services__modal active-modal":"services__modal"}>
                        <div className='services__modal-content'>
                            <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Develop</h3>
                            <p className="services__modal-description">Services with mora than 1 year of experience. Providing quality work to clients and companies.</p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Operations in MySQL</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Operations in SQL</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Soon IA</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services