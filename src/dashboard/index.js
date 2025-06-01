import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./index.css";
import profileimg from "../images/download (2).png";

const Dashboard = () => {
  const username = "Gumel";
  const [date, setDate] = useState(new Date());

  return (
    <div className="dashboard">
      {/* Top Bar */}
      <header className="dashboard-header">
        <img src="/logo.png" alt="Logo" className="dashboard-logo" />
        <img src={profileimg} alt="Profile" className="dashboard-avatar" />
      </header>

      {/* Welcome Section */}
      <section className="welcome-section">
        <h2>Welcome, {username} 👋</h2>
        <p>Let’s get things done today!</p>
      </section>

      {/* Actions */}
      <section className="actions">
        <button className="action-btn primary">Book a Session</button>
        <button className="action-btn">History</button>
        <button className="action-btn">Favorites</button>
      </section>

      {/* Upcoming Events */}
      <section className="card">
        <h3>Upcoming Events</h3>
        <ul className="event-list">
          <li>
            <strong>Mindfulness Workshop</strong> – June 10, 3PM
          </li>
          <li>
            <strong>Study Group</strong> – June 12, 1PM
          </li>
          <li>
            <strong>Networking Call</strong> – June 14, 5PM
          </li>
        </ul>
      </section>

      {/* Calendar */}
      <section className="card calendar-section">
        <h3>Calendar</h3>
        <Calendar onChange={setDate} value={date} className="custom-calendar" />
      </section>

      {/* Media Section */}
      <section className="card media-section">
        <h3>Gallery</h3>
        <div className="media-scroll">
          <img src="/images/event1.jpg" alt="event1" />
          <img src="/images/event2.jpg" alt="event2" />
          <video controls>
            <source src="/videos/intro.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        &copy; 2025 Gumel Innovation. All rights reserved.
      </footer>
    </div>
  );
};

export default Dashboard;
