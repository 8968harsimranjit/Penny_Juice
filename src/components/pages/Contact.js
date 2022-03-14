import React from 'react'
import '../../App.css';
import './Contact.css';
import { Button } from '../Button';

function Contact() {
  return (
    <div className='contacts'>
        <div className ="info">
        <h2>We'd Love to Hear From you.</h2>
        <p>We're a family-owned business that was founded in 2001.
         We have over 40 years of experience in the beverage industry.</p>
         <ul>Each case contains six half-gallon bottles of different flavors.
             Here are some of the things you should know before ordering from us.
             <li>We do not do contracrs</li>
             <li>We do free delivery nationwide</li>
             <li>Our minium order consist of One case</li>
         </ul>
        </div>
        <div className='contact__form'>
            <h2>Contact Us</h2>

            <label>Name</label>
            <input placeholder='Name' />

            <label>Email</label>
            <input placeholder='Email' />

            <label>Message</label>
            <textarea placeholder='Message'></textarea>

        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Submit
        </Button>
        </div>
        
        
    </div>
  )
}

export default Contact;