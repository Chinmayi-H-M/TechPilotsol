import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-gradient-orb"></div>
      <div className="hero-gradient-orb orb-2"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="trust-badges d-flex">
            <span className="badge">✓ Affordable</span>
            <span className="badge">✓ Fast Delivery</span>
            <span className="badge">✓ Custom Solutions</span>
          </div>
          
          <h1 className="hero-title">
            We build websites & <span className="text-gradient">automate</span> your business operations
          </h1>
          
          <p className="hero-description">
            Helping startups and small businesses grow through premium design, reliable development, and smart automation systems tailored to your unique needs.
          </p>
          
          <div className="hero-actions">
            <button className="btn btn-primary">Start Your Project</button>
            <button className="btn btn-secondary">Get Free Consultation</button>
          </div>
          <p className="budget-note">Budget-friendly digital solutions designed to scale.</p>
        </div>

        <div className="hero-visual">
          <div className="dashboard-wrapper glass-card">
            <div className="dashboard-header">
              <div className="dots">
                <span></span><span></span><span></span>
              </div>
            </div>
            
            <div className="dashboard-body">
              <div className="panel chart-panel">
                <h4>Monthly Growth</h4>
                <div className="chart-bar-container">
                  <div className="bar" style={{height: '40%'}}></div>
                  <div className="bar" style={{height: '60%'}}></div>
                  <div className="bar" style={{height: '30%'}}></div>
                  <div className="bar" style={{height: '80%'}}></div>
                  <div className="bar" style={{height: '100%', background: 'var(--primary)'}}></div>
                </div>
              </div>
              
              <div className="panel stats-panel">
                <div className="stat-item glass-card">
                  <h5>Tasks Automated</h5>
                  <p className="text-gradient">1,240</p>
                </div>
                <div className="stat-item glass-card">
                  <h5>Time Saved</h5>
                  <p className="text-gradient">145 hrs</p>
                </div>
              </div>

              <div className="panel workflow-panel glass-card floating">
                <div className="workflow-node icon-web">🌐</div>
                <div className="workflow-line"></div>
                <div className="workflow-node icon-bot">⚙️</div>
                <div className="workflow-line"></div>
                <div className="workflow-node icon-mail">📧</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
