import React from 'react';
import './Portfolio.css';

const projects = [
  {
    title: 'Smart Bus Tracker',
    category: 'Web App & Automation',
    color1: '#2563eb',
    color2: '#4f46e5'
  },
  {
    title: 'Business Website',
    category: 'Corporate Design',
    color1: '#10b981',
    color2: '#059669'
  },
  {
    title: 'Task Manager App',
    category: 'SaaS Platform',
    color1: '#8b5cf6',
    color2: '#6d28d9'
  },
  {
    title: 'E-Commerce Dashboard',
    category: 'Analytics & UI',
    color1: '#f59e0b',
    color2: '#d97706'
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
                style={{ background: `linear-gradient(135deg, ${project.color1}, ${project.color2})` }}
              >
                <div className="thumb-abstract"></div>
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
