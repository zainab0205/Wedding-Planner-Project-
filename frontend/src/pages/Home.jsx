import React, { useEffect, useState } from 'react';
import '../assets/css/home.css';
import arushi from '../assets/images/arushi.jpg';
import zainab from '../assets/images/zainab.jpg';
import nikita from '../assets/images/nikita.png';
import axios from 'axios';
import TestimonialForm from '../pages/TestimonialForm';
import TestimonialCard from '../pages/TestimonialCard'; // adjust path if needed

const portfolioItems = [
  { image: 'https://via.placeholder.com/300x200', title: 'Wedding 1', description: 'Beautiful destination wedding' },
  { image: 'https://via.placeholder.com/300x200', title: 'Wedding 2', description: 'Elegant evening ceremony' },
  { image: 'https://via.placeholder.com/300x200', title: 'Wedding 3', description: 'Traditional celebration' },
  { image: 'https://via.placeholder.com/300x200', title: 'Wedding 4', description: 'Intimate and personal' },
  { image: 'https://via.placeholder.com/300x200', title: 'Wedding 5', description: 'Royal themed decor' },
];

const Home = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const fetchTestimonials = () => {
    axios.get('http://localhost:8000/api/testimonials/')
      .then(response => setTestimonials(response.data))
      .catch(error => console.error('Error fetching testimonials:', error));
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section id="hero">
        <div className="hero-content">
          <h1>Forever Bonds with Love</h1>
          <p>The Focus of Aaradhya is on Creating Enduring Memories</p>
          <p>via Elegant, Courteous, and Sincere Wedding Ceremonies</p>
          <p>that embody hospitality and the Virtues of a Moral Path</p>
          <a href="/services" className="cta-btn" aria-label="Book Event Button">
            <i className="fas fa-calendar-check"></i> Book Event
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="section">
        <div className="container">
          <h2>About Us</h2>
          <p className="intro-text">
            At AaradhyaAikyam, we specialize in turning your wedding dreams into reality...
          </p>
          <blockquote className="tagline">
            <p>"Where Vows Become Forever, Connecting Hearts for the Future."</p>
          </blockquote>

          <div className="about-timeline">
            {/* Experience */}
            <div className="timeline-block">
              <div className="timeline-content left">
                <h3>Experience</h3>
                <p>With over a decade of experience in the wedding industry...</p>
              </div>
            </div>

            {/* Arushi */}
            <div className="timeline-block">
              <div className="timeline-content right">
                <img src={arushi} alt="Arushi Mathur" className="admin-photo" />
                <h3>Arushi Mathur</h3>
                <p className="role">Founder & Lead Planner</p>
                <p>Arushi combines her artistic vision with exceptional leadership...</p>
              </div>
            </div>

            {/* Passion */}
            <div className="timeline-block">
              <div className="timeline-content left">
                <h3>Passion</h3>
                <p>We thrive on the excitement of curating experiences...</p>
              </div>
            </div>

            {/* Zainab */}
            <div className="timeline-block">
              <div className="timeline-content right">
                <img src={zainab} alt="Zainab Bee" className="admin-photo" />
                <h3>Zainab Bee</h3>
                <p className="role">Creative Director</p>
                <p>Zainab adds a unique artistic touch to every event...</p>
              </div>
            </div>

            {/* Care */}
            <div className="timeline-block">
              <div className="timeline-content left">
                <h3>Care</h3>
                <p>Our approach is centered around genuine care and dedication...</p>
              </div>
            </div>

            {/* Nikita */}
            <div className="timeline-block">
              <div className="timeline-content right">
                <img src={nikita} alt="Nikita" className="admin-photo" />
                <h3>Nikita</h3>
                <p className="role">Operations Manager</p>
                <p>Nikita ensures seamless logistics and flawless execution...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="service-cards">
            <div className="service-card">
              <i className="fas fa-gem"></i>
              <h3>Venue Selection</h3>
              <p>Exclusive venue options that fit your style...</p>
            </div>
            <div className="service-card">
              <i className="fas fa-birthday-cake"></i>
              <h3>Catering</h3>
              <p>Curated culinary experiences from renowned chefs...</p>
            </div>
            <div className="service-card">
              <i className="fas fa-music"></i>
              <h3>Entertainment</h3>
              <p>Live music, DJs, and performers to keep your guests entertained...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section">
        <div className="container">
          <h2>Portfolio</h2>
          <div className="gallery">
            {portfolioItems.map((item, index) => (
              <div key={index} className={`portfolio-item ${index >= 4 && !showAll ? 'hidden' : ''}`}>
                <img src={item.image} alt={item.title} className="portfolio-img" />
                <div className="overlay">
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="see-more-btn" onClick={() => setShowAll(!showAll)}>
            <i className={`fas ${showAll ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            {showAll ? ' See Less' : ' See More'}
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-list">
          {testimonials.length > 0 ? (
            testimonials.map((t, i) => <TestimonialCard key={i} testimonial={t} />)
          ) : (
            <p>No testimonials yet.</p>
          )}
        </div>
      </section>

      {/* Testimonial Submission Form */}
      <section className="testimonial-form-section">
        <TestimonialForm onSubmitSuccess={fetchTestimonials} />
      </section>
    </>
  );
};

export default Home;
