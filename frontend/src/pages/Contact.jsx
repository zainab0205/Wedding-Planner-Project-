import React, { useState } from 'react';
import '../assets/css/contact_admin.css';

const ContactAdmin = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with API call to backend
    console.log("Form Submitted:", formData);

    setStatusMessage({
      type: 'success',
      text: 'Your message has been sent! We will get back to you soon.',
    });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-container">
      {/* Contact Info */}
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>
          "Let’s start planning a celebration that tells your story—one filled with love, laughter, and unforgettable moments. 
          Whether you have questions, ideas, or dreams, we’re just a message away. Let’s connect and make it perfect. 
          Reach out to begin your beautiful forever."
        </p>
        <p><strong>Address:</strong> Vijay Nagar, Indore, Madhya Pradesh</p>
        <p><strong>Phone:</strong> +91 7566574907</p>
        <p><strong>Email:</strong> aaradhyaaikyam78@gmail.com</p>
      </div>

      {/* Contact Form */}
      <div className="contact-form contact-admin">
        <h1>Contact Us</h1>
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name"><i className="fas fa-user"></i> Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="email"><i className="fas fa-envelope"></i> Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="message"><i className="fas fa-comment"></i> Message:</label>
            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required />
          </div>

          <button type="submit" className="contact-button">Send Message</button>
        </form>

        {statusMessage && (
          <div id="formStatus">
            <div className={`alert ${statusMessage.type}`}>{statusMessage.text}</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactAdmin;
