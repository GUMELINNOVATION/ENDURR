import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./index.css";
import { pageLink, socialLink } from "../data";
import profileimg from "../images/download (2).png";

const Dashboard = ({ username = "Gumel" }) => {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [timeLeft, setTimeLeft] = useState("");

  const [events, setEvents] = useState([
    {
      title: "Virtual Gym Session",
      date: "2025-06-05T15:00:00",
      location: "Online via Zoom",
    },
    {
      title: "HIIT Workout Class",
      date: "2025-06-07T18:30:00",
      location: "Google Meet",
    },
    {
      title: "Stretch & Chill",
      date: "2025-06-10T09:00:00",
      location: "Microsoft Teams",
    },
  ]);

  // Countdown timer for selected event
  useEffect(() => {
    const timer = setInterval(() => {
      if (selectedEvent) {
        const now = new Date();
        const eventTime = new Date(selectedEvent.date);
        const diff = eventTime - now;

        if (diff <= 0) {
          setTimeLeft("Meeting Started");
        } else {
          const hours = Math.floor(diff / (1000 * 60 * 60));
          const minutes = Math.floor((diff / (1000 * 60)) % 60);
          const seconds = Math.floor((diff / 1000) % 60);
          setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
        }
      } else {
        setTimeLeft("");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [selectedEvent]);

  // Handle delete event
  const handleDelete = () => {
    setEvents((prev) =>
      prev.filter((event) => event.title !== selectedEvent.title)
    );
    setSelectedEvent(null);
    setTimeLeft("");
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <img src="/logo.png" alt="Logo" className="dashboard-logo" />
        <img
          src={profileimg}
          alt={`${username} Profile`}
          className="dashboard-avatar"
        />
      </header>

      {/* Welcome */}
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
          {events.map((event, index) => (
            <li
              key={index}
              onClick={() => setSelectedEvent(event)}
              className="event-item"
            >
              <strong>{event.title}</strong> –{" "}
              {new Date(event.date).toLocaleString()}
            </li>
          ))}
        </ul>

        {/* Event details */}
        {selectedEvent && (
          <div className="event-actions">
            <h4>{selectedEvent.title}</h4>
            <p>
              <strong>Platform:</strong> {selectedEvent.location}
            </p>
            <p>
              <strong>Starts in:</strong> {timeLeft}
            </p>
            <div className="event-btn-group">
              <button className="action-btn primary">Join Meeting</button>
              <button className="action-btn" onClick={handleDelete}>
                Delete Meeting
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Calendar */}
      <Calendar
        onChange={setDate}
        value={date}
        className="custom-calendar"
        onClickDay={(value) => {
          const formattedDate = value.toISOString().split("T")[0];
          navigate(`/schedule/${formattedDate}`);
        }}
      />

      {/* Gallery */}
      <section className="card media-section">
        <h3>Gallery</h3>
        <div className="media-scroll">
          <img src="/images/event1.jpg" alt="Mindfulness Workshop" />
          <img src="/images/event2.jpg" alt="HIIT Session" />
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
