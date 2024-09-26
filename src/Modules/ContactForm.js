import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import '../Styles/ContactForm.scss';

function ContactForm() {
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  const characterLimit = 2000;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://your-cloudflare-worker-url/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        console.log('Message sent successfully!');
      } else {
        console.error('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section id="contact" className="contact-form">
      <div className="form-div" data-aos="fade-up">
        <h2 className="title">Contact me here</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-inputs">
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                maxLength={characterLimit}
                required
                placeholder="Write me a brief message!"
              ></textarea>
              <small>
                {formData.message.length}/{characterLimit}
              </small>
            </div>
          </div>
          <button type="submit">Send</button>
          {isSubmitted && <p>Thank you for your message!</p>}
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
