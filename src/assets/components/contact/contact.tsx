import './contact.css';
import Messenger from '../../../icons/messenger.png';
import Whatsapp from '../../../icons/Whatsapp.png';
import Mail from '../../../icons/mail.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form:any = useRef();

    const sendEmail = (e:any) => {
        e.preventDefault();

        emailjs.sendForm('service_iuto3ao', 'template_esory1i', form.current, 'MBNTsuqgiiyMHb4Pl')
        e.target.reset()
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section_title">Get in touch</h2>
            <span className="section_subtitle">Contact Me</span>
            <div className="contact_container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>
                    <div className="contact_info">

                        <div className="contact__card">
                            <img src={Mail} alt="Mail-icon" className="social-img" />
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact_card-data">angeldtm09@gmail.com </span>
                            <a href="mailto:angeldtm09@gmail.com" target={'_blank'} className="contact__button"><br />Write me {" "}
                                <i className='uil uil-arrow-right contact__card-icon'></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <img src={Whatsapp} alt="whatsapp-icon" className="social-img" />
                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact_card-data">+506 6024 6577 </span>
                            <a href="https://api.whatsapp.com/send?phone=50660246577&text=Hello,more%20information" target={'_blank'} className="contact__button"><br />Write me
                                <i className='uil uil-arrow-right contact__card-icon'></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <img src={Messenger} alt="messenger-icon" className="social-img" />
                            <h3 className="contact__card-title">Messenger</h3>
                            <span className="contact_card-data">angel.torresmora.5 </span>
                            <a href="https://m.me/angel.torresmora.5" target={'_blank'} className="contact__button"><br />Write me
                                <i className='uil uil-arrow-right contact__card-icon'></i>
                            </a>
                        </div>

                    </div>
                </div>
                <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>
                    <form ref={form} onSubmit={sendEmail}
                    className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact_form-tag">Name</label>
                            <input type="text" name='name' className='contact__form-input' placeholder='Insert your name' />
                        </div>
                        <div className="contact__form-div">
                            <label className="contact_form-tag">Mail</label>
                            <input type="email" name='email' className='contact__form-input' placeholder='Insert your email' />
                        </div>
                        <div className="contact__form-div contact__form-area">
                            <label className="contact_form-tag">Project</label>
                            <textarea name="project" className='contact__form-input' placeholder='Write your Project'></textarea>
                        </div>
                        <button className="button button--flex">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact