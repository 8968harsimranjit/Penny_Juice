import React, { useState } from 'react'
import './Contact.css';
import { db } from "../firebase";

function Contact() {

const[name, setName] = useState("");
const[email, setEmail] = useState("");
const[message, setMessage] = useState("");

const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("messages")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className='contacts' onSubmit={handleSubmit}>
        <div className ="info">
        <h2>We'd Love to Hear From you.</h2>
        <p>We're a family-owned business that was founded in 2001.
         We have over 40 years of experience in the beverage industry.
         Each case contains six half-gallon bottles of different flavors.
        Here are some of the things you should know before ordering from us.</p>
             <ul>
             <li>We do not do contracts</li>
             <li>We do free delivery nationwide</li>
             <li>Our minium order consist of One case</li>
         </ul>
        </div>
        <div className='contact__form'>
            <h3>Contact Us</h3>

            <label>Name</label>
            <input 
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}/>

            <label>Email</label>
            <input placeholder='Email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>

            <label>Message</label>
            <textarea 
            placeholder='Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}></textarea>
        <div className='contact__btn'>
        <button type="submit" onClick={handleSubmit}
          /*style={{ background: loader ? " rgb(2, 2, 110)" : "#E7BB41" }}  inline style for loader. When the user submit the form the button will turn grey. */
        >
          Submit
        </button>
        </div>
        </div>     
    </div>
  )
}

export default Contact;