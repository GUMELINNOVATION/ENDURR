import React from "react";
// Assuming you have a CSS file for styling

const Seamless = () => {
  return (
    <div className="seamless-container" id="seamless">
      <div className="seamless-header">
        <span className="tagline">Seamless</span>
        <h1>Get stuff done, seamlessly</h1>
        <p>
          Book sessions, sync with your calendar, and join video calls directly
          from your browser, on desktop or mobile. No additional downloads
          required.
        </p>
        {/* <a href="#">Explore features</a> */}
      </div>

      <div className="features-section">
        <div className="feature-visual">
          <div className="step">
            <div className="step-icon">✔️</div>
            <div className="step-text">Book your sessions</div>
          </div>
          <div className="step">
            <div className="step-icon">🗓️</div>
            <div className="step-text">Sync to your calendar</div>
          </div>
          <div className="step">
            <div className="step-icon">➡️</div>
            <div className="step-text">Join from your browser</div>
          </div>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat-box" style={{ backgroundColor: "#e0ebe5" }}>
          <div className="stat-icon">🕒</div>
          <div className="stat-value">5 million+</div>
          <div className="stat-label">completed sessions</div>
        </div>
        <div className="stat-box" style={{ backgroundColor: "#dbeafe" }}>
          <div className="stat-icon">🎯</div>
          <div className="stat-value">400 million+</div>
          <div className="stat-label">minutes of focus</div>
        </div>
        <div className="stat-box" style={{ backgroundColor: "#fde2e2" }}>
          <div className="stat-icon">🌍</div>
          <div className="stat-value">150+ countries</div>
          <div className="stat-label">user locations</div>
        </div>
      </div>
    </div>
  );
};

export default Seamless;
