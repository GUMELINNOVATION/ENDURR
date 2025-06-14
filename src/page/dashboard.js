import React, { useState } from "react";
import "./dashboard.css";
import { CalendarIcon, MenuIcon, XIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { mockUsers, workoutEmojis, userData } from "./userdata";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState("gym");
  const [partnerPreference, setPartnerPreference] = useState("favorites");
  const [timeView, setTimeView] = useState("25m");
  const [upcomingWorkouts, setUpcomingWorkouts] = useState(
    userData.upcomingWorkouts
  );
  const handleJoinWorkout = (id) => {
    alert(`You joined workout ${id}`);
  };

  const handleCancelWorkout = (id) => {
    const updated = upcomingWorkouts.filter((w) => w.id !== id);
    setUpcomingWorkouts(updated);
  };

  const [sessions] = useState([
    {
      id: 101,
      user: mockUsers[0],
      day: "Sat 14",
      time: "9:00 AM",
      task: "any",
      duration: 60,
    },
    {
      id: 102,
      user: mockUsers[0],
      day: "Sun 15",
      time: "8:00 AM",
      task: "any",
      duration: 60,
    },
    {
      id: 103,
      user: mockUsers[0],
      day: "Sat 16",
      time: "10:00 AM",
      task: "any",
      duration: 60,
    },
    {
      id: 104,
      user: mockUsers[0],
      day: "Sun 15",
      time: "10:00 AM",
      task: "any",
      duration: 60,
    },
    {
      id: 105,
      user: mockUsers[1],
      day: "Sat 14",
      time: "12:00 PM",
      task: "any",
      duration: 60,
    },
    {
      id: 106,
      user: mockUsers[1],
      day: "Sat 14",
      time: "1:00 PM",
      task: "any",
      duration: 60,
    },
    {
      id: 107,
      user: mockUsers[2],
      day: "Sat 14",
      time: "2:00 PM",
      task: "any",
      duration: 60,
    },
    {
      id: 108,
      user: mockUsers[3],
      day: "Sat 14",
      time: "2:00 PM",
      task: "any",
      duration: 60,
    },
    {
      id: 109,
      user: mockUsers[3],
      day: "Sun 15",
      time: "2:00 PM",
      task: "any",
      duration: 60,
    },
    {
      id: 110,
      user: mockUsers[4],
      day: "Sat 14",
      time: "4:00 PM",
      task: "any",
      duration: 60,
    },
    {
      id: 111,
      user: mockUsers[5],
      day: "Sun 15",
      time: "4:00 PM",
      task: "any",
      duration: 60,
    },
    {
      id: 112,
      user: mockUsers[6],
      day: "Sun 15",
      time: "5:00 PM",
      task: "any",
      duration: 60,
    },
  ]);

  const currentUser = mockUsers.find((u) => u.id === 999);
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

  // // Convert 12-hour time string like "9:00 AM" to 24-hour integer hour (0-23)
  // const getHour24 = (timeStr) => {
  //   const [time, modifier] = timeStr.split(" ");
  //   let [hour] = time.split(":").map(Number);
  //   if (modifier === "PM" && hour !== 12) hour += 12;
  //   if (modifier === "AM" && hour === 12) hour = 0;
  //   return hour;
  // };

  const [hoverSessionId, setHoverSessionId] = useState(null);

  return (
    <div className="dashboard-container">
      <div className="dashboard-navbar">
        <div className="navbar-top">
          <h1 className="logo">Endurr</h1>
        </div>
        <div>
          <img
            src={currentUser.avatar}
            alt="Profile"
            className="navbar-avatar"
          />
        </div>
      </div>

      <div className="calendar-header">
        <div className="calendar-month-and-menu">
          <button
            className="mobile-menu-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <XIcon size={26} /> : <MenuIcon size={26} />}
          </button>

          <div className="calendar-month">
            <CalendarIcon className="icon" />
            <span>June 2025</span>
          </div>
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

      <div className="main-page">
        <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <div className="sidebar-header">
            <h2>💪</h2>
          </div>

          <button
            className="schedule-btn"
            onClick={() => navigate("/schedule-workout")}
          >
            Schedule Workout
          </button>
          <div className="section">
            <p className="section-title">📅 Upcoming Workouts</p>

            {upcomingWorkouts.length > 0 ? (
              upcomingWorkouts.map((workout, index) => (
                <div key={index} className="workout-card">
                  <div className="workout-info">
                    <p>
                      <strong>Partner:</strong> {workout.partnerName}
                    </p>
                    <p>
                      <strong>Time:</strong> {workout.time}
                    </p>
                    <p>
                      <strong>Activity:</strong> {workout.activity}
                    </p>
                  </div>
                  <div className="workout-actions">
                    <button
                      className="join-btn"
                      onClick={() => handleJoinWorkout(workout.id)}
                    >
                      ✅ Join
                    </button>
                    <button
                      className="cancel-btn"
                      onClick={() => handleCancelWorkout(workout.id)}
                    >
                      ❌ Cancel
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-workouts">No upcoming workouts scheduled.</p>
            )}
          </div>

          <div className="section">
            <p className="section-title">🛠 Session Settings</p>
            <div className="tab-group">
              {["gym", "run", "any"].map((task) => (
                <button
                  key={task}
                  className={`tab ${selectedTask === task ? "active" : ""}`}
                  onClick={() => setSelectedTask(task)}
                >
                  {workoutEmojis[task]}{" "}
                  {task.charAt(0).toUpperCase() + task.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="tip-card">
            💡 Tip: Enable <strong>"Quiet Mode"</strong> in settings to train
            silently or focus solo.
          </div>

          <div className="section">
            <p className="section-title">👥 Partner Preference</p>
            <div className="partner-buttons">
              {["favorites", "anyone"].map((pref) => (
                <button
                  key={pref}
                  className={`partner-btn ${
                    partnerPreference === pref ? "active" : ""
                  }`}
                  onClick={() => setPartnerPreference(pref)}
                >
                  {pref === "favorites" ? "❤️ Favorites" : "🌐 Anyone"}
                </button>
              ))}
            </div>
          </div>

          <div className="footer">🔒 Privacy • 📃 Terms</div>
        </aside>

        <main className="main-content">
          {/* <div className="dashboard-navbar">
          <div className="navbar-left">
            <h1 className="logo">Endurr</h1>
          </div>
          <div className="navbar-right">
            <img
              src={currentUser.avatar}
              alt="Profile"
              className="navbar-avatar"
            />
          </div>
        </div> */}

          <div className="calendar-grid">
            <div className="time-column">
              {/* Blank space before first time label */}
              <div className="time-cell blank-cell"></div>
              {times.map((time) => (
                <div key={time} className="time-cell">
                  {time}
                </div>
              ))}
            </div>

            {days.map((day) => {
              const dayNumber = parseInt(day.split(" ")[1], 10);
              const dayDate = new Date(
                new Date().getFullYear(),
                new Date().getMonth(),
                dayNumber
              );
              const isToday =
                dayDate.toDateString() === new Date().toDateString();

              return (
                <div key={day} className="day-column">
                  <div className={`day-header ${isToday ? "today" : ""}`}>
                    {day}
                  </div>
                  {times.map((time, i) => {
                    const cellSessions = sessions.filter(
                      (s) => s.day === day && s.time === time
                    );

                    return (
                      <div key={i} className="calendar-cell">
                        {cellSessions.map((session) => (
                          <div
                            key={session.id}
                            className="session-avatar"
                            onMouseEnter={() => setHoverSessionId(session.id)}
                            onMouseLeave={() => setHoverSessionId(null)}
                          >
                            <img
                              src={session.user.avatar}
                              alt={session.user.name}
                              className="avatar-img"
                            />
                            {hoverSessionId === session.id && (
                              <div className="tooltip">
                                <strong>{session.user.name}</strong>
                                <p>
                                  {session.time} — {workoutEmojis[session.task]}{" "}
                                  {session.task.charAt(0).toUpperCase() +
                                    session.task.slice(1)}
                                </p>
                                <p>Duration: {session.duration} min</p>
                                <button
                                  className="join-btn"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    alert(
                                      `Joined ${session.user.name}'s workout at ${session.time}`
                                    );
                                  }}
                                >
                                  Join
                                </button>
                              </div>
                            )}
                          </div>
                        ))}
                        {!cellSessions.some(
                          (s) => s.user.id === currentUser.id
                        ) && <div className="add-plus">+</div>}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
