import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../assets/css/home.css';
import '../assets/css/base.css';
import '../assets/css/navbar.css';
import '../assets/css/services.css';
import '../assets/css/portfolio.css';
import '../assets/css/contact_admin.css';
import '../assets/css/footer.css';



const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;

