import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import '../Styles/ContactForm.scss';

function ContactForm() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  const handleInputChange = (event) => {
    setMessage(event.target.value); // Update state when text changes
  };

  const characterLimit = 2000;

  return (
    <section id="contact" className="contact-form">
      <div className='form-div' data-aos="fade-up">
        <h2 className="title">Contact me here</h2>
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
                placeholder="Write me a brief message!"
              ></textarea>
              <small>
                {message.length}/{characterLimit}
              </small>
            </div>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
