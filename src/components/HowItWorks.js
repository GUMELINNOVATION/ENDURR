import React from "react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <div className="hiw-container">
      <section className="hiw-hero">
        <h1>How to Use Endurr</h1>
        <p>
          Endurr connects you with people around the world to work out together,
          stay motivated, and achieve your fitness goals — all online.
        </p>
      </section>

      <section className="hiw-steps">
        {[
          {
            step: "1",
            title: "Create Your Account",
            description:
              "Sign up with your email and set your fitness preferences, availability, and time zone.",
          },
          {
            step: "2",
            title: "Schedule a Workout",
            description:
              "Pick a date and time you want to work out. You can invite a partner or join a public session.",
          },
          {
            step: "3",
            title: "Join the Virtual Gym",
            description:
              "At your scheduled time, join the video call and start working out together!",
          },
        ].map((item) => (
          <div className="hiw-step" key={item.step}>
            <div className="hiw-step-number">Step {item.step}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </section>

      <section className="hiw-cta">
        <h2>Ready to Get Started?</h2>
        <p>
          Join the Endurr community and start building your fitness habit with
          others — no matter where you are.
        </p>
        <div className="hiw-buttons">
          {/* <button className="hiw-btn primary">Sign Up Now</button> */}
          <Link to="/auth" className="hiw-btn primary">
            Sign Up Now
          </Link>
          <button className="hiw-btn secondary">Learn More</button>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
