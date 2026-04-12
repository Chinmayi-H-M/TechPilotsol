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

const ClientReviews = () => {
  return (
    <section className="section reviews-section" id="reviews">
      <div className="container">
        <div className="reviews-header">
          <h2 className="section-title">What Our <span className="text-gradient">Clients Say</span></h2>
          <p className="section-subtitle">Don't just take our word for it. Hear from the innovative companies driving growth with TechPilot.</p>
        </div>
        
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card glass-card">
              <div className="review-rating">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="star-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="review-content">"{review.content}"</p>
              <div className="review-author">
                <img src={review.avatar} alt={review.name} className="author-avatar" />
                <div className="author-info">
                  <h4 className="author-name">{review.name}</h4>
                  <p className="author-role">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
