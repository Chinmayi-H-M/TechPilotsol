import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero-image.jpg';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-gradient-orb"></div>
      <div className="hero-gradient-orb orb-2"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            We build websites & <span className="text-gradient">automate</span> your business operations
          </h1>

          <p className="hero-description">
            Helping startups and small businesses grow through premium design, reliable development, and smart automation systems tailored to your unique needs.
          </p>

          <div className="trust-badges d-flex">
            <span className="badge">✓ Affordable</span>
            <span className="badge">✓ Fast Delivery</span>
            <span className="badge">✓ Custom Solutions</span>
          </div>

          <div className="hero-actions">
            <a 
  href="https://wa.me/919019391873?text=Hi%20I%20want%20to%20start%20a%20project.%20Can%20you%20help%20me?" 
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="primary-btn btn btn-primary">Start Your Project</button>
</a>
            <a 
  href="https://wa.me/919019391873?text=Hi%20I%20would%20like%20a%20free%20consultation." 
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="secondary-btn btn btn-secondary">Get Free Consultation</button>
</a>
          </div>
          <p className="budget-note">Budget-friendly digital solutions designed to scale.</p>
        </div>

        <div className="hero-visual">
          <div className="hero-img-wrapper glass-card">
            <img src={heroImage} alt="TechPilot Smart Automation & Reliable Development" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
