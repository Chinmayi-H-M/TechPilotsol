import React, { useState } from 'react';
import './Services.css';

const servicesData = [
  {
    title: 'Website Development',
    description: 'High-performance, custom-coded websites designed to convert visitors into steady customers.',
    icon: '💻',
    details: ['Responsive across all devices', 'Optimized for fast loading', 'Technical SEO best practices', 'Custom micro-animations']
  },
  {
    title: 'Landing Pages',
    description: 'Premium, conversion-optimized landing pages for your marketing campaigns and product launches.',
    icon: '🚀',
    details: ['High-converting copy layout', 'A/B testing architecture', 'Lead capture forms', 'Integrated analytics tracking']
  },
  {
    title: 'Logos & Posters',
    description: 'Striking brand identities and visual assets that make a memorable impact everywhere.',
    icon: '🎨',
    details: ['Modern minimalist vectors', 'Full brand guidelines', 'Social media asset kits', 'Print-ready typography']
  },
  {
    title: 'Automation Systems',
    description: 'Smart internal tools and workflows to eliminate repetitive tasks and save hundreds of hours.',
    icon: '⚙️',
    details: ['Custom API integrations', 'Data-driven dashboards', 'Automated email sequences', 'Zapier/Make setup']
  }
];

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index, e) => {
    e.preventDefault();
    // Toggle off if clicking the already open box, otherwise open the new one
    setExpandedIndex(prev => prev === index ? null : index);
  };

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
          {servicesData.map((service, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div className={`service-card glass-card ${isExpanded ? 'expanded' : ''}`} key={index}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                
                <div className={`service-details ${isExpanded ? 'open' : ''}`}>
                  <ul>
                    {service.details.map((detail, dIndex) => (
                      <li key={dIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>

                <a href="#" className="service-link" onClick={(e) => toggleExpand(index, e)}>
                  {isExpanded ? 'Show Less' : 'Know More'} 
                  <span>{isExpanded ? '↑' : '→'}</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
