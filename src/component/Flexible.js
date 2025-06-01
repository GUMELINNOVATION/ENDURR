import React from "react";

const Flexible = () => {
  return (
    <div className="flexible-container">
      <div className="flexible-content">
        <div className="flexible-text">
          <h1>Flexible Group Workouts with Endurr</h1>
          <p className="intro-text">
            Connect and workout with motivated people from anywhere in the world
            at any time that works for you. Endurr makes group fitness flexible
            and accessible.
          </p>

          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon" aria-label="Clock emoji">
                ⏰
              </div>
              <h3>Schedule On Your Terms</h3>
              <p>
                Choose the exact date and time that fits your schedule. Early
                bird or night owl - we've got you covered.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon" aria-label="Globe emoji">
                🌎
              </div>
              <h3>Global Workout Community</h3>
              <p>
                Join or host sessions with fitness enthusiasts from different
                time zones and cultures.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon" aria-label="Repeat arrows emoji">
                🔄
              </div>
              <h3>Adjustable Commitment</h3>
              <p>
                From one-time sessions to regular weekly meetups - control your
                level of involvement.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon" aria-label="Chat emoji">
                💬
              </div>
              <h3>Real-Time Connection</h3>
              <p>
                Chat and motivate each other during workouts through our
                integrated platform.
              </p>
            </div>
          </div>

          <div className="schedule-demo">
            <h3>How Scheduling Works:</h3>
            <ol>
              <li>Select "Create Session" from your dashboard</li>
              <li>Choose your workout type and difficulty level</li>
              <li>Set your preferred date and time</li>
              <li>Open it to the community or invite specific friends</li>
              <li>Meet your workout partners at the scheduled time!</li>
            </ol>
          </div>

          <div className="cta-buttons">
            <button
              className="cta-button primary"
              aria-label="Schedule your first session"
            >
              Schedule Your First Session
            </button>
            <button
              className="cta-button secondary"
              aria-label="Browse upcoming workouts"
            >
              Browse Upcoming Workouts
            </button>
          </div>
        </div>

        <div className="flexible-image">
          <img
            src="https://images.unsplash.com/photo-1599058917769-8c05d5a2b6b0?auto=format&fit=crop&w=800&q=80"
            alt="Group of people working out together online"
          />
          <div className="image-overlay">
            <p>
              "The energy of group workouts with the flexibility of your
              schedule"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flexible;
