import React from "react";
// Assuming you have a CSS file for styling

const Seamless = () => {
  return (
    <div className="seamless-container">
      <header className="seamless-header">
        <h1>Seamless Fitness</h1>
        <p className="tagline">Achieve your gym goals effortlessly</p>
      </header>
      <div className="features-section">
        <h2>Seamless Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">💪</div>
            <h3>Personalized Tracking</h3>
            <p>Track your workouts and see your progress over time.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Data Visualization</h3>
            <p>Clear charts show your strength and endurance improvements.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Achievement Badges</h3>
            <p>Earn rewards for hitting milestones and staying consistent.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Seamless Integration</h3>
            <p>Syncs with your favorite fitness apps and wearables.</p>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Ready to Transform Your Fitness Journey?</h2>
        <button className="btn cta-btn">Get Started Today</button>
      </div>
    </div>
  );
};

export default Seamless;
