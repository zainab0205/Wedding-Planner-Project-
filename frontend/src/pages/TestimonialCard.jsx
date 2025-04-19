import React from 'react';
import '../assets/css/testimonialcard.css';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-image-wrapper">
        {testimonial.image && (
          <img src={testimonial.image} alt={testimonial.client_name} className="testimonial-image" />
        )}
        <div className="testimonial-text">
          <h4>{testimonial.client_name}</h4>
          <p>"{testimonial.testimonial}"</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
