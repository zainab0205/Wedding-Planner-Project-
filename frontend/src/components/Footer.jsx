import React from 'react';
import '../assets/css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h4>About Us</h4>
          <p>
            Your trusted partner for unforgettable events. We specialize in
            wedding planning, corporate events, and more.
          </p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p><i className="fas fa-map-marker-alt"></i> Vijay Nagar, Indore, MP</p>
          <p><i className="fas fa-phone"></i> +91 7489014432</p>
          <p><i className="fas fa-envelope"></i> arushi@weddingplanner.com</p>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Aaradhya Aikyam. All Rights Reserved.</p>
        <p>Powered by <strong>Aaradhyadharma IT Solution</strong></p>
      </div>
    </footer>
  );
};

export default Footer;
