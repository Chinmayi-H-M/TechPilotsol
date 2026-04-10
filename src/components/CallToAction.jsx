import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="section cta-section" id="quote">
      <div className="container">
        <div className="cta-wrapper glass-card">
          <div className="cta-content text-center">
            <h2>Ready to transform your business?</h2>
            <p className="cta-desc">
              Get your premium website or automation system built at an affordable price. Let's discuss your custom requirements today.
            </p>
            <div className="cta-actions">
              <a 
  href="mailto:hmschinmaye06@gmail.com?subject=New%20Project%20Request&body=Hi%20I%20visited%20your%20website.%20I%20would%20like%20to%20discuss%20a%20project.%20Please%20contact%20me."
>
  <button className="cta-btn btn btn-primary">Request a Quote</button>
</a>
            </div>
            <p className="cta-reassurance">Quick response • Friendly support • Transparent pricing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
