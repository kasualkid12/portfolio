import React, { useState } from 'react';
import '../Styles/ContactForm.scss';

function ContactForm() {
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setMessage(event.target.value); // Update state when text changes
  };

  const characterLimit = 2000;

  return (
    <div className="contact-form">
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <div className="form-inputs">
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="message">Message:</label>
             <textarea 
              id="message" 
              name="message" 
              required 
              maxLength={characterLimit} 
              value={message} 
              onChange={handleInputChange} 
              placeholder="Describe your project (max 2000 characters)"
            ></textarea>
            <small>{message.length}/{characterLimit}</small>
          </div>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
