import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { bookings } from "./bookings";
import "./index.css"; // Adjust path as needed
const SchedulePage = () => {
  const { date } = useParams();
  const navigate = useNavigate();

  // Filter bookings by date param
  const dayBookings = bookings.filter((b) => b.date === date);

  return (
    <div className="schedule-page">
      <button onClick={() => navigate(-1)} className="back-btn">
        ← Back to Dashboard
      </button>
      <h2>Meetings on {new Date(date).toDateString()}</h2>
      {dayBookings.length === 0 ? (
        <p>No meetings scheduled for this day.</p>
      ) : (
        <ul className="booking-list">
          {dayBookings.map(({ id, user, startTime, duration }) => (
            <li key={id} className="booking-item">
              <img
                src={user.profileImg}
                alt={`${user.name} Profile`}
                className="dashboard-avatar"
              />
              <div className="booking-info">
                <p>
                  <strong>{user.name}</strong>
                </p>
                <p>
                  Time: {startTime} - Duration: {duration} minutes
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SchedulePage;
