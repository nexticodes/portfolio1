import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  }

  const handleEmailChange = e => {
    setEmail(e.target.value);
  }

  const handleTextArea = e => {
    setMessage(e.target.value);
  }

  return (
    <div ref={props.refProp} className='contact__container'>
      <div className='contact__banner'>
        <h1>INTERESTED IN WORKING WITH ME?</h1>
        <hr/>
        <h3>I am honored — send me a message and I'll get back to you as soon as possible!</h3>
        <form className='contact__form'>
          <input
            type='text'
            value={name}
            placeholder='Name'
            onChange={handleNameChange}
          />
          <input
            type='text'
            value={email}
            placeholder='Email'
            onChange={handleEmailChange}
          />
          <textarea placeholder='Enter your message here' value={message} onChange={handleTextArea}/>
        </form>
        <hr/>
      </div>
    </div>
    );
}

export default Contact;