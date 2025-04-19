import React from 'react';
import '../assets/css/event_detail.css';

const services = [
  {
    id: 1,
    title: 'Decoration',
    icon: '🎀',
    details: {
      styles: 'Traditional, Modern, Boho, Minimalist',
      floralOptions: 'Fresh, Artificial, Custom',
      customization: 'Yes, fully customizable themes',
      priceRange: '₹50,000 - ₹2,00,000',
    }
  },
  {
    id: 2,
    title: 'Catering',
    icon: '🍽️',
    details: {
      cuisine: 'Indian, Continental, Chinese, Fusion',
      vegNonVeg: 'Both available',
      perPlateRate: '₹500 - ₹2,500',
      tasting: 'Tasting session included',
    }
  },
  {
    id: 3,
    title: 'Venue',
    icon: '🏰',
    details: {
      capacity: '50 to 500+ guests',
      type: 'Indoor / Outdoor / Banquet',
      location: 'Indore & nearby areas',
      price: 'Starts from ₹1,00,000/day',
    }
  },
  {
    id: 4,
    title: 'Photography',
    icon: '📸',
    details: {
      coverage: 'Up to 12 hours',
      preWedding: 'Available',
      photos: '300+ edited photos',
      video: 'Full HD / Drone available',
    }
  },
  {
    id: 5,
    title: 'Entertainment',
    icon: '🎤',
    details: {
      options: 'DJ, Live Band, Dancers',
      duration: 'Up to 4 hours',
      stage: 'LED + Lighting Setup',
      sound: 'Included (5000W+)',
    }
  },
];

const EventDetail = () => {
  return (
    <div className="event-detail">
      <div className="event-banner">
        <h1>Wedding Services</h1>
        <p>Explore premium services to elevate your wedding experience.</p>
      </div>

      <div className="services-section">
        <h2>Our Core Services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <ul className="service-details">
                {Object.entries(service.details).map(([label, value]) => (
                  <li key={label}><strong>{label.replace(/([A-Z])/g, ' $1')}: </strong>{value}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
