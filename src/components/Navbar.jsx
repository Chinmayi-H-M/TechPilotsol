import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check local storage for theme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <div className="nav-logo">
          <img src="https://res.cloudinary.com/dkguge6rw/image/upload/v1775988165/ttt-removebg-preview_hqcjit.png" alt="TechPilot" className="logo-img" />
          <span className="logo-text">TechPilot</span>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#how-it-works" onClick={() => setIsMenuOpen(false)}>Process</a>
          <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
          <a href="#why-choose-us" onClick={() => setIsMenuOpen(false)}>Why Us</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>

        <div className="nav-actions">
          <button 
            className={`theme-toggle ${isDark ? 'dark' : 'light'}`} 
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
          >
            <div className="toggle-thumb">
              {isDark ? '🌙' : '☀️'}
            </div>
          </button>
          
          <a 
  href="https://wa.me/919019391873?text=Hi%20I%20came%20from%20your%20website.%20I%20need%20a%20project." 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="btn btn-primary d-none-sm">Request a Quote</button>
</a>
          <button
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
