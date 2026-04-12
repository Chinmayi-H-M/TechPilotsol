import React from 'react';
import './Portfolio.css';

import img1 from '../assets/portfolio/smart_bus_tracker.png';
import img2 from '../assets/portfolio/business_website.png';
import img3 from '../assets/portfolio/task_manager.png';
import img4 from '../assets/portfolio/ecommerce_dashboard.png';

const projects = [
  {
    title: 'Smart Bus Tracker',
    category: 'Web App & Automation',
    image: img1
  },
  {
    title: 'Business Website',
    category: 'Corporate Design',
    image: img2
  },
  {
    title: 'Task Manager App',
    category: 'SaaS Platform',
    image: img3
  },
  {
    title: 'E-Commerce Dashboard',
    category: 'Analytics & UI',
    image: img4
  }
];

const Portfolio = () => {
  return (
    <section className="section bg-light" id="portfolio">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">Recent Work</span>
          <h2>Featured Projects</h2>
          <p className="section-desc">
            Explore some of our latest digital products and agency collaborations that deliver real business impact.
          </p>
        </div>

        <div className="grid grid-cols-2 portfolio-grid">
          {projects.map((project, index) => (
            <div className="portfolio-card glass-card" key={index}>
              <div 
                className="portfolio-thumb" 
                style={{ 
                  backgroundImage: `url(${project.image})`, 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'top left', 
                  backgroundRepeat: 'no-repeat' 
                }}
              >
              </div>
              <div className="portfolio-info">
                <span className="portfolio-category">{project.category}</span>
                <h3>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-section">
          <button className="btn btn-secondary">View All Projects</button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
