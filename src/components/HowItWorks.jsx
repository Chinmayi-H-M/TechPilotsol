import React from 'react';
import './HowItWorks.css';

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We start by understanding your business goals, target audience, and current bottlenecks to craft a tailored digital strategy.',
    icon: '🎯'
  },
  {
    number: '02',
    title: 'Design & Development',
    description: 'Our team designs premium, pixel-perfect interfaces and develops robust, scalable code for your digital platform.',
    icon: '💻'
  },
  {
    number: '03',
    title: 'Automation & Integration',
    description: 'We connect your tools and build smart workflows to automate repetitive tasks, saving you hours every week.',
    icon: '⚙️'
  },
  {
    number: '04',
    title: 'Launch & Scale',
    description: 'After rigorous testing, we launch your projects and ensure everything runs smoothly as your business scales.',
    icon: '🚀'
  }
];

const HowItWorks = () => {
  return (
    <section className="section bg-light" id="how-it-works">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">Process</span>
          <h2>How It <span className="text-gradient">Works</span></h2>
          <p className="section-desc">
            A streamlined, transparent process designed to get you from idea to launched platform as quickly and efficiently as possible.
          </p>
        </div>

        <div className="how-it-works-grid">
          {steps.map((step, index) => (
            <div className="step-card glass-card" key={index}>
              <div className="step-header">
                <div className="step-icon">{step.icon}</div>
                <div className="step-number">{step.number}</div>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
