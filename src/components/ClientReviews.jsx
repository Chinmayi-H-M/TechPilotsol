import React from 'react';
import './ClientReviews.css';

const reviews = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'CEO, NovaCloud',
    content: "TechPilot completely transformed our business operations! The automation they implemented saved us over 20 hours a week. Their team is incredibly responsive and highly skilled.",
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=b6e3f4',
    rating: 5,
  },
  {
    id: 2,
    name: 'Mark Stevenson',
    role: 'CTO, DataFlow',
    content: "Their web development team is top-tier. Our new SaaS platform is blazing fast, user-friendly, and visually stunning. We couldn't have asked for a better technical partner.",
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mark&backgroundColor=c0aede',
    rating: 5,
  },
  {
    id: 3,
    name: 'Elena Rossi',
    role: 'Operations Director, Veloce',
    content: "Incredible ROI. Within 3 months of deploying their custom AI solutions, our customer satisfaction scores skyrocketed. TechPilot legitimately understands modern tech scaling.",
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena&backgroundColor=ffdfbf',
    rating: 5,
  }
];

// Temporarily disable the ClientReviews component by rendering a placeholder message
const ClientReviews = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px', color: 'gray' }}>
      Client Reviews are currently unavailable.
    </div>
  );
};

export default ClientReviews;
