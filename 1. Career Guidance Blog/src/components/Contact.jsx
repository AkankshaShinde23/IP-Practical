import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false); // State to manage the confirmation message

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Message sent successfully!');
        setSubmitted(true); // Show confirmation message
        // Reset the form after submission
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="contact-container">
      {submitted ? (
        <div className="confirmation-message">
          <h2>Thank You!</h2>
          <p>Your message has been submitted successfully.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
