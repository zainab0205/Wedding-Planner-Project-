import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import this
import '../assets/css/services.css';

const dummyEvents = [
  {
    id: 1,
    name: 'Wedding Planning',
    description: 'We provide full-service wedding planning...',
    image: '/images/event1.jpg',
    icon: 'heart'
  },
  {
    id: 2,
    name: 'Corporate Events',
    description: 'Professional event management for your business...',
    image: '/images/event2.jpg',
    icon: 'briefcase'
  },
  {
    id: 3,
    name: 'Birthday Parties',
    description: 'Fun-filled birthday events tailored for all age groups...',
    image: '/images/event3.jpg',
    icon: 'birthday-cake'
  }
];

const Services = () => {
  const navigate = useNavigate(); // ✅ Use React Router's navigation

  const redirectToEventDetail = (eventId) => {
    navigate(`/event/${eventId}`); // ✅ Client-side route change
  };

  return (
    <>
      {/* Portfolio Header Section */}
      <section className="portfolio-header section">
        <h1 className="portfolio-title">Our Services</h1>
        <p className="portfolio-subtitle">Discover our curated work that reflects our passion and expertise.</p>
      </section>

      {/* Event Services Section */}
      <section className="event-services section">
        <h1>Event Services</h1>
        <div className="services-container">
          {dummyEvents.map((event) => (
            <div
              className="service-card"
              key={event.id}
              onClick={() => redirectToEventDetail(event.id)}
            >
              <div className="service-icon">
                <i className={`fas fa-${event.icon || 'calendar'}`}></i>
              </div>
              <img src={event.image} alt={event.name} />
              <div className="service-content">
                <h2>{event.name}</h2>
                <p>{event.description}</p>
                <button className="btn-book">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="additional-services section">
        <h1>Additional Services</h1>
        {/* Add content here later */}
      </section>
    </>
  );
};

export default Services;


  