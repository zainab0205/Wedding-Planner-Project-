import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import EventDetail from './pages/EventDetail'; // Adjust the path if it's somewhere else

import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import banner4 from './assets/images/banner4.jpg';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="/event/:id" element={<EventDetail />} />

          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

