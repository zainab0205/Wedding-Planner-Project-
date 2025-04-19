import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/testimonial.css';

const TestimonialForm = ({ onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    client_name: '',
    testimonial: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('client_name', formData.client_name);
    data.append('testimonial', formData.testimonial);
    if (formData.image) data.append('image', formData.image);

    try {
      const res = await axios.post('http://127.0.0.1:8000/api/testimonials/', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (res.status === 201) {
        alert('Thank you for your review!');
        setFormData({ client_name: '', testimonial: '', image: null });
        document.getElementById('image').value = null;

        // 🔁 Call parent refresh function if available
        if (onSubmitSuccess) onSubmitSuccess();
      }
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="testimonial-form">
      <h3>Share Your Experience</h3>
      <form className="testimonial-form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="client_name">Name</label>
          <input
            type="text"
            id="client_name"
            name="client_name"
            value={formData.client_name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="testimonial">Your Testimonial</label>
          <textarea
            id="testimonial"
            name="testimonial"
            value={formData.testimonial}
            onChange={handleChange}
            rows="4"
            placeholder="Write your review here..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Upload Image (optional)</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="submit-btn">
          <i className="fas fa-paper-plane"></i> Submit Review
        </button>
      </form>
    </div>
  );
};

export default TestimonialForm;
