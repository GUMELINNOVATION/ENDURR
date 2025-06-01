import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./index.css";
import { pageLink, socialLink } from "../data";
import profileimg from "../images/download (2).png";

const Dashboard = ({ username = "Gumel" }) => {
  const [date, setDate] = useState(new Date());

  const upcomingEvents = [
    { title: "Virtual HIIT with Alex", date: "June 5, 7AM" },
    { title: "Morning Yoga Flow", date: "June 7, 6AM" },
    { title: "Accountability Check-in", date: "June 9, 8PM" },
    { title: "Partner Strength Training", date: "June 11, 5PM" },
    { title: "Stretch & Chill Session", date: "June 13, 9PM" },
  ];

  return (
    <div className="dashboard">
      {/* Top Bar */}
      <header className="dashboard-header">
        <img src="/logo.png" alt="Logo" className="dashboard-logo" />
        <img
          src={profileimg}
          alt={`${username} Profile`}
          className="dashboard-avatar"
        />
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
          {upcomingEvents.map((event, index) => (
            <li key={index}>
              <strong>{event.title}</strong> – {event.date}
            </li>
          ))}
        </ul>
      </section>

      {/* Calendar */}
      <section className="card calendar-section">
        <h3>Calendar</h3>
        <Calendar onChange={setDate} value={date} className="custom-calendar" />
        <p className="selected-date">Selected Date: {date.toDateString()}</p>
      </section>

      {/* Media Section */}
      <section className="card media-section">
        <h3>Gallery</h3>
        <div className="media-scroll">
          <img src="/images/event1.jpg" alt="Mindfulness Workshop snapshot" />
          <img src="/images/event2.jpg" alt="Study Group session" />
          <video controls>
            <source src="/videos/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Footer */}
      <footer className="section footer">
        <ul className="footer-links">
          {pageLink.map((link) => (
            <li key={link.id || link.text}>
              <a href={link.href} className="footer-link">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <ul className="footer-icons">
          {socialLink.map(({ id, href, icon }) => (
            <li key={id}>
              <a href={href} className="footer-icon" title={icon}>
                <i className={icon}></i>
              </a>
            </li>
          ))}
        </ul>
        <p className="copyright">
          &copy; 2025 Gumel Innovation. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Dashboard;
