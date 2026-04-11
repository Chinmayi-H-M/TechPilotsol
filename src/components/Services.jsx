import React from 'react';
import './Services.css';

const servicesData = [
  {
    title: 'Website Development',
    description: 'High-performance, custom-coded websites designed to convert visitors into steady customers.',
    icon: '💻'
  },
  {
    title: 'Landing Pages',
    description: 'Premium, conversion-optimized landing pages for your marketing campaigns and product launches.',
    icon: '🚀'
  },
  {
    title: 'Logos & Posters',
    description: 'Striking brand identities and visual assets that make a memorable impact everywhere.',
    icon: '🎨'
  },
  {
    title: 'Automation Systems',
    description: 'Smart internal tools and workflows to eliminate repetitive tasks and save hundreds of hours.',
    icon: '⚙️'
  }
];

const Services = () => {
  return (
    <section className="section bg-light" id="services">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">What We can Offer</span>
          <h2>Our Services</h2>
          <p className="section-desc">
            We provide end-to-end digital solutions that give startups an unfair advantage. From pixel-perfect design to smart automation logic.
          </p>
        </div>

        <div className="grid grid-cols-4 services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card glass-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="service-link">Learn More <span>→</span></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
