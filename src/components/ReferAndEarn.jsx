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

// Temporarily disable the ReferAndEarn component by rendering a placeholder message
const ReferAndEarn = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px', color: 'gray' }}>
            Refer and Earn feature is currently unavailable. It will be updated soon.
        </div>
    );
};

export default ReferAndEarn;
