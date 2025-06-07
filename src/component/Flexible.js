import React from "react";
import sessionImage from "../images/flexible.jpeg"; // Placeholder image, replace if needed

const Flexible = () => {
  return (
    <div className="flexible-section" id="flexible">
      <div className="flexible-wrapper">
        {/* LEFT TEXT SECTION */}
        <div className="flexible-text">
          <p className="tagline">FLEXIBLE</p>
          <h2 className="headline">Focus for a bit, or for a while.</h2>
          <p className="description">
            25, 50, and 75-minute sessions to finish daily chores (plants need
            watering?) or tackle bigger projects (let’s finish that thesis).
          </p>
          <a href="#" className="explore-link">
            Explore features
          </a>
        </div>

        {/* RIGHT VISUAL SECTION */}
        <div className="flexible-visual">
          <div className="duration-tabs">
            <button className="tab active">25m</button>
            <button className="tab">50m</button>
            <button className="tab">75m</button>
          </div>

          <div className="session-cards">
            <div className="card small">
              <p className="time">10:30am - 10:55am</p>
              <p className="user">👤 Yui K.</p>
              <div className="icons">✏️ ❌</div>
            </div>
            <div className="card medium">
              <p className="time">4:00pm - 4:50pm</p>
              <p className="user">👤 Marwan S.</p>
              <div className="icons">✏️ ❌</div>
            </div>
            <div className="card large">
              <p className="time">9:45pm - 11:00pm</p>
              <p className="user">👤 Shefali A.</p>
              <div className="icons">✏️ ❌</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flexible;
