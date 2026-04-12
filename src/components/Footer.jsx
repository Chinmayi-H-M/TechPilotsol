import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="nav-logo mb-2">
            <img src="https://res.cloudinary.com/dkguge6rw/image/upload/v1775988165/ttt-removebg-preview_hqcjit.png" alt="TechPilot Logo" className="logo-img" />
            <span className="logo-text">TechPilot</span>
          </div>
          <p className="footer-desc">
            Empowering startups with premium design, scalable development, and intelligent automation systems.
          </p>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <h4>Services</h4>
            <a href="#services">Web Development</a>
            <a href="#services">Landing Pages</a>
            <a href="#services">Brand Identity</a>
            <a href="#services">Automation</a>
          </div>

          <div className="link-group">
            <h4>Company</h4>
            <a href="#home">About Us</a>
            <a href="#portfolio">Our Work</a>
            <a href="#quote">Contact</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom border-top mt-4">
        <div className="container text-center pt-2 pb-2">
          <p className="text-muted">© {new Date().getFullYear()} TechPilot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
