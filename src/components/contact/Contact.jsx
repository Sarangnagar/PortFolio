import React from 'react'
import './Contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w1xbil7', 'template_sgrud5h', form.current, 'YITH-r-6pVRpmCVhf')
      e.target.reset()
  };

  return (
    <div>
      <section id = 'contact'>
        <h5> Get In Touch</h5>
        <h2> Contact Me</h2>
        <div className='container contact__container'>
          <div className='contact__options'>
            <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>
              Email
            </h4>
            <h5>sarangnagar29099@gmail.com</h5>
            <a href='mailto:sarangnagar29099@gmail.com'> Send a Message</a>
            </article>
            <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>
              Messanger
            </h4>
            <h5>sarangnagarmessanger</h5>
            <a href='https://telegram.org/'> Send a Message</a>
            </article>
            <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>
              WhatsApp
            </h4>
            <h5>9166883865</h5>
            <a href='https://api.whatsapp.com/send?phone+919166883865'> Send a Message</a>
            </article>
          </div>
          {/* END of contact options */}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type='email' name='email' placeholder='Your Email' required/>
            <textarea name='message' rows='7' placeholder='Your Messaage' required> </textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>

        </div>
      </section>
    </div>
  )
}

export default Contact
