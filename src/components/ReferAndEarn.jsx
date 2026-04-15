import React, { useState } from 'react';
import './ReferAndEarn.css';

const referSteps = [
  {
    step: '1',
    title: 'Share Your Code',
    desc: 'Send your unique referral code or link to friends, family, or followers.',
    icon: '🔗'
  },
  {
    step: '2',
    title: 'They Sign Up',
    desc: 'Your friends get a 15% discount on their first TechPilot project.',
    icon: '🎁'
  },
  {
    step: '3',
    title: 'You Earn ₹200',
    desc: 'Once they complete their first transaction, we instantly credit your wallet.',
    icon: '💸'
  }
];

const ReferAndEarn = () => {
  const [copied, setCopied] = useState(false);
  const referralCode = 'PILOT2025';

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://techpilot.com/signup?ref=${referralCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section bg-light" id="refer">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">Rewards Program</span>
          <h2>Refer & <span className="text-gradient">Earn</span></h2>
          <div style={{ margin: '1rem 0' }}>
            <span className="badge-unavailable"> This program Currently Unavailable</span>
          </div>
          <p className="section-desc">
            Invite your network to build with TechPilot. They get premium discounts, and you earn cash rewards. It's a win-win.
          </p>
        </div>

        <div className="refer-grid">
          {/* How it Works Side */}
          <div className="refer-how-it-works">
            <h3 className="refer-side-title">How it works</h3>
            <div className="refer-timeline">
              {referSteps.map((item, index) => (
                <div className="refer-timeline-step" key={index}>
                  <div className="refer-timeline-icon glass-card">{item.icon}</div>
                  <div className="refer-timeline-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Mock Dashboard Side */}
          <div className="refer-dashboard-mock">
            <div className="glass-card mockup-card">
              <div className="mockup-header">
                <h4>Your Referral Dashboard</h4>
                <span className="badge-active">Active</span>
              </div>

              <div className="mockup-stats">
                <div className="m-stat">
                  <p>Total Earnings</p>
                  <h3>₹1,200</h3>
                </div>
                <div className="m-stat">
                  <p>Referrals</p>
                  <h3>6</h3>
                </div>
              </div>

              <div className="mockup-code-section">
                <p>Your unique referral link:</p>
                <div className="code-box">
                  <span>https://techpilot.com/signup?ref=<strong>{referralCode}</strong></span>
                  <button className={`btn-copy ${copied ? 'copied' : ''}`} onClick={handleCopy}>
                    {copied ? 'Copied!' : 'Copy Link'}
                  </button>
                </div>
              </div>

              <div className="mockup-history">
                <p className="history-title">Recent Activity</p>
                <div className="history-item">
                  <div className="h-left">
                    <div className="h-avatar">S</div>
                    <div>
                      <p className="h-name">Sarah Jenkins</p>
                      <p className="h-date">2 hours ago</p>
                    </div>
                  </div>
                  <div className="h-right text-success">+ ₹200</div>
                </div>
                <div className="history-item">
                  <div className="h-left">
                    <div className="h-avatar bg-pending">M</div>
                    <div>
                      <p className="h-name">Mike R.</p>
                      <p className="h-date">Yesterday</p>
                    </div>
                  </div>
                  <div className="h-right text-warning">Pending</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferAndEarn;
