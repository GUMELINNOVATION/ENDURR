import React, { useState } from "react";
import "./dashboard.css";
import { CalendarIcon, MenuIcon, XIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState("gym");
  const [partnerPreference, setPartnerPreference] = useState("favorites");
  const [timeView, setTimeView] = useState("25m");
  const [sessions, setSessions] = useState([]);

  const navigate = useNavigate();

  const getNext7Days = () => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const today = new Date();
    const next7Days = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);

      const day = daysOfWeek[date.getDay()];
      const dayOfMonth = date.getDate();

      next7Days.push(`${day} ${dayOfMonth}`);
    }

    return next7Days;
  };

  const days = getNext7Days();

  const times = Array.from({ length: 24 }, (_, i) => {
    const hour = i % 12 === 0 ? 12 : i % 12;
    const period = i < 12 ? "AM" : "PM";
    return `${hour}:00 ${period}`;
  });

  const toggleSession = (day, time) => {
    const exists = sessions.find((s) => s.day === day && s.time === time);
    if (exists) {
      setSessions(sessions.filter((s) => !(s.day === day && s.time === time)));
    } else {
      setSessions([...sessions, { day, time }]);
    }
  };

  const todayDate = new Date();

  return (
    <div className="dashboard-container">
      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <h1 className="logo">Endurr</h1>
        <button
          className="schedule-btn"
          onClick={() => navigate("/schedule-workout")}
        >
          Schedule Workout
        </button>

        <div className="section">
          <p className="section-title">SESSION SETTINGS</p>
          <div className="tab-group">
            {["gym", "run", "any"].map((task) => (
              <button
                key={task}
                className={`tab ${selectedTask === task ? "active" : ""}`}
                onClick={() => setSelectedTask(task)}
              >
                {task === "gym" ? "🏋️‍♀️" : task === "run" ? "🏃‍♂️" : "✨"}{" "}
                {task.charAt(0).toUpperCase() + task.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="tip-card">
          💡 Tip: Enable "Quiet Mode" in settings to train silently or focus
          solo.
        </div>

        <div className="section">
          <p className="section-title">PARTNER PREFERENCE</p>
          <div className="partner-buttons">
            {["favorites", "anyone"].map((pref) => (
              <button
                key={pref}
                className={`partner-btn ${
                  partnerPreference === pref ? "active" : ""
                }`}
                onClick={() => setPartnerPreference(pref)}
              >
                {pref.charAt(0).toUpperCase() + pref.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="footer">Privacy • Terms</div>
      </aside>

      {/* Main Calendar View */}
      <main className="main-content">
        <div className="calendar-header">
          <div className="calendar-month">
            <CalendarIcon className="icon" />
            <span>June 2025</span>
          </div>
          <div className="time-buttons">
            {["Day", "25m", "50m", "75m"].map((view) => (
              <button
                key={view}
                className={`time-btn ${timeView === view ? "active" : ""}`}
                onClick={() => setTimeView(view)}
              >
                {view}
              </button>
            ))}
          </div>
        </div>

        <div className="calendar-grid">
          <div className="time-column">
            {times.map((time) => (
              <div key={time} className="time-cell">
                {time}
              </div>
            ))}
          </div>

          {days.map((day) => {
            const dayNumber = parseInt(day.split(" ")[1], 10);
            const dayDate = new Date(
              todayDate.getFullYear(),
              todayDate.getMonth(),
              dayNumber
            );
            const isToday = dayDate.toDateString() === todayDate.toDateString();

            return (
              <div key={day} className="day-column">
                <div className={`day-header ${isToday ? "today" : ""}`}>
                  {day}
                </div>
                {times.map((time, i) => {
                  const scheduled = sessions.find(
                    (s) => s.day === day && s.time === time
                  );
                  return (
                    <div
                      key={i}
                      className={`calendar-cell ${
                        scheduled ? "scheduled" : ""
                      }`}
                      onClick={() => toggleSession(day, time)}
                    >
                      {scheduled ? "✓" : ""}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
