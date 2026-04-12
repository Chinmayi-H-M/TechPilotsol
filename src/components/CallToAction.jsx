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
  href="https://wa.me/919019391873?text=Hi%20I%20came%20from%20your%20website.%20I%20need%20a%20project." 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="btn btn-primary d-none-sm">Request a Quote</button>
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
