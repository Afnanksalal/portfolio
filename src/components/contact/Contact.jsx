import { useState } from 'react'
import { SiMinutemailer } from 'react-icons/si'
import { RiInstagramFill } from 'react-icons/ri'
import { RiWhatsappFill } from 'react-icons/ri'
import { useRef } from 'react'
import { sendEmail } from '../../utility/ValidationUtility'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

import './contact.css'

const Contact = () => {
    const [ failed, setFailed ] = useState(false)
    const [ success, setSuccess ] = useState(false)
    const form = useRef(null);

    useEffect(() => {
        AOS.init({duration:1000})
    }, []);

    const handleSubmit = (e) => {
        sendEmail(e, setFailed, setSuccess, form);
    }
  
    return (
        <section id='contact' className='contact'>
            <h5 data-aos="fade-up">Get In Touch</h5>
            <h2 data-aos="fade-up">Contact Me</h2>
            <p data-aos="fade-up">
                If you believe my skills and experience align with your needs, please do not hesitate to contact me.
            </p>
            <div className='container contact__container'>
                <div className="contact__options">
                <article className="contact__option" data-aos="fade-right">
                    <div className='contact__option-header'>
                        <SiMinutemailer className='contact__option-icon'/> 
                        <h4> Email</h4>
                    </div>
                    <a href="mailto:appooafnan@gmail.com" target='_blank' rel="noreferrer" arial-label="You can email me by clicking this link">
                        appooafnan@gmail.com
                    </a>
                </article>
                <article className="contact__option" data-aos="fade-right">
                    <div className="contact__option-header">
                        <RiInstagramFill className='contact__option-icon'/> 
                        <h4>Instagram</h4>
                    </div>
                    <a href="https://www.instagram.com/Afnanksalal/" target='_blank' rel="noreferrer" arial-label="Message me on facebook messenger">
                        Afnanksalal
                    </a>
                </article>
                <article className="contact__option" data-aos="fade-right">
                    <div className="contact__option-header">
                        <RiWhatsappFill className='contact__option-icon'/> 
                        <h4>WhatsApp</h4>
                    </div>
                    <a href="https://api.whatsapp.com/send?phone=7558072191" target='_blank' rel="noreferrer" arial-label="Call me on this number">
                        +91 7558072191
                    </a>
                </article>
                </div>
                <form ref={form} onSubmit={handleSubmit}>
                    <div className={`send__failed ${failed ? 'span' : ''}`}>Please fill all the field</div>
                    <div className={`send__success ${success ? 'span' : ''}`}>Message Sent Successfuly</div>
                    <div className='name1' data-aos="fade-left">
                        <input type="text" name='name' required/>
                        <label htmlFor="name" >Full Name</label>
                    </div>
                    <div className="email1" data-aos="fade-left">
                        <input type="text" name='email' required/>
                        <label htmlFor="email" >Email Address</label>
                    </div>
                    <div className="subject1" data-aos="fade-left">
                        <input type="text" name='subject' required/>
                        <label htmlFor="subject" >Subject</label>
                    </div>
                    <div className="message1" data-aos="fade-left">
                        <textarea name="message" rows="8" required></textarea>
                        <label htmlFor="message">Your Message</label>
                    </div>
                    <button type='submit' data-aos="fade-left" className='btn btn-primary' >
                        Send a Message
                    </button>
                </form>
            </div>
        </section>
  )
}

export default Contact
