import React from 'react';
import './Automation.css';

const Automation = () => {
  return (
    <section className="section automation" id="about">
      <div className="container automation-container">
        <div className="automation-content">
          <span className="subtitle">Save Time</span>
          <h2>Save Time with <span className="text-gradient">Smart Automation</span></h2>
          <p className="section-desc">
            Stop losing hours to repetitive tasks. We build intelligent workflows that handle lead responses, email sequences, CRM updates, and API integrations behind the scenes.
          </p>
          <ul className="automation-features">
            <li><span>✓</span> Custom Zapier & Make integrations</li>
            <li><span>✓</span> Automated Lead Nurturing</li>
            <li><span>✓</span> Centralized Business Dashboards</li>
            <li><span>✓</span> Inventory & Task syncing</li>
          </ul>
          <button className="btn btn-primary mt-4">Discover Automation</button>
        </div>

        <div className="automation-visual">
          <div className="glass-card flow-container">
            <div className="flow-item app-icon blue">CRM</div>
            <div className="flow-arrow">→</div>
            <div className="flow-item central-hub">
              <div className="hub-core">AI</div>
              <div className="hub-ring"></div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-column">
              <div className="flow-item app-icon green">Email</div>
              <div className="flow-item app-icon purple">Slack</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automation;
