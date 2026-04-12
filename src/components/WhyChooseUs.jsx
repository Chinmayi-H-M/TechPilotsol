import React from 'react';
import './WhyChooseUs.css';

const reasons = [
  {
    title: 'Premium Quality Design',
    description: 'We don’t use generic templates. Every pixel is crafted to give your business a premium, trustworthy look that wows your users.',
    icon: '✨'
  },
  {
    title: 'Modern Tech Stack',
    description: 'Built with React, Next.js, and modern CSS, ensuring lightning-fast performance, high SEO scores, and effortless scalability.',
    icon: '⚡'
  },
  {
    title: 'Smart Automation',
    description: 'We don’t just build a pretty site; we connect APIs and workflows so your business can run on autopilot.',
    icon: '🧠'
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden fees or surprise hourly invoices. We provide fixed, clear pricing specifically designed for startups.',
    icon: '💎'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section" id="why-choose-us">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">Advantages</span>
          <h2>Why Choose <span className="text-gradient">TechPilot</span>?</h2>
          <p className="section-desc">
            We operate at the intersection of beautiful design and intelligent engineering to deliver unmatched value.
          </p>
        </div>

        <div className="why-grid">
          <div className="why-image-wrapper">
            <div className="glass-card illustration-card">
              <div className="chart-bars">
                <div className="c-bar h-30 fade-in-up" style={{ animationDelay: '0.1s' }}></div>
                <div className="c-bar h-50 fade-in-up" style={{ animationDelay: '0.2s' }}></div>
                <div className="c-bar h-80 fade-in-up" style={{ animationDelay: '0.3s' }}></div>
                <div className="c-bar h-100 gradient-bg fade-in-up" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <div className="growth-text">
                <h3>2x</h3>
                <p>Average conversion increase</p>
              </div>
            </div>
          </div>

          <div className="why-features">
            {reasons.map((reason, index) => (
              <div className="reason-item" key={index}>
                <div className="reason-icon glass-card">{reason.icon}</div>
                <div className="reason-content">
                  <h4>{reason.title}</h4>
                  <p>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
