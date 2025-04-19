import React, { useState } from 'react';
import '../assets/css/portfolio.css';

const portfolioItems = [
  {
    id: 1,
    title: 'Royal Rajasthani Wedding',
    description: 'A luxurious wedding held in a majestic fort with traditional decor and cultural performances.',
    image_url: 'https://via.placeholder.com/600x400',
  },
  {
    id: 2,
    title: 'Beachside Bliss',
    description: 'A serene beach ceremony with soft hues, seashell decor, and ocean breeze blessings.',
    image_url: 'https://via.placeholder.com/600x400',
  },
  {
    id: 3,
    title: 'Vintage Garden Affair',
    description: 'A romantic garden setup inspired by vintage charm and floral elegance.',
    image_url: 'https://via.placeholder.com/600x400',
  },
  // Add more items as needed
];

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const changeProject = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = portfolioItems.length - 1;
    if (newIndex >= portfolioItems.length) newIndex = 0;
    setCurrentIndex(newIndex);
  };

  const currentProject = portfolioItems[currentIndex];

  return (
    <>
      <section className="portfolio-header section">
        <h1 className="portfolio-title">Our Portfolio</h1>
        <p className="portfolio-subtitle">Discover our curated work that reflects our passion and expertise.</p>
      </section>

      <section className="portfolio-gallery section">
        <div className="gallery-container">
          {portfolioItems.map((item, index) => (
            <div key={item.id} className="portfolio-card" onClick={() => openModal(index)}>
              <img src={item.image_url} alt={item.title} className="portfolio-image" loading="lazy" />
              <div className="portfolio-overlay">
                <h2>{item.title}</h2>
                <p>{item.description.split(' ').slice(0, 15).join(' ')}...</p>
                <button className="view-details-btn">
                  <i className="fas fa-eye"></i> View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {modalOpen && (
        <div className="portfolio-modal open-modal">
          <span className="close-modal" onClick={closeModal}>&times;</span>
          <div className="modal-content">
            <img src={currentProject.image_url} alt={currentProject.title} className="modal-image" />
            <h2 id="modalTitle">{currentProject.title}</h2>
            <p id="modalDescription">{currentProject.description}</p>
            <div className="modal-navigation">
              <button className="nav-button" onClick={() => changeProject(-1)}>&#10094; Previous</button>
              <button className="nav-button" onClick={() => changeProject(1)}>Next &#10095;</button>
            </div>
            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
