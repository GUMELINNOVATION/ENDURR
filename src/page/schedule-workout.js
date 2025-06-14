import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Generate time options in 30-min steps
const generateTimeOptions = () => {
  const times = [];
  for (let h = 6; h <= 22; h++) {
    times.push(`${String(h).padStart(2, "0")}:00`);
    times.push(`${String(h).padStart(2, "0")}:30`);
  }
  return times;
};

export default function ScheduleWorkout() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    date: "",
    time: "",
    duration: "30",
    type: "gym",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const workout = {
      day: new Date(form.date).toDateString(),
      time: formatTime(form.time),
      duration: form.duration,
      type: form.type,
    };

    const sessions = JSON.parse(localStorage.getItem("workouts") || "[]");
    sessions.push(workout);
    localStorage.setItem("workouts", JSON.stringify(sessions));

    navigate("/dashboard");
  };

  const formatTime = (time24) => {
    const [h, m] = time24.split(":").map(Number);
    const period = h >= 12 ? "PM" : "AM";
    const hour = h % 12 === 0 ? 12 : h % 12;
    return `${hour}:${m.toString().padStart(2, "0")} ${period}`;
  };

  const timeOptions = generateTimeOptions();

  // Inline styles
  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9fb",
    fontFamily: "Inter, sans-serif",
    padding: "1rem",
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    padding: "2rem",
    borderRadius: "0.75rem",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
    width: "100%",
    maxWidth: "500px",
  };

  const titleStyle = {
    fontSize: "1.8rem",
    marginBottom: "1.5rem",
    textAlign: "center",
    color: "#1f2937",
  };

  const inputStyle = {
    padding: "0.75rem 1rem",
    fontSize: "1rem",
    borderRadius: "0.75rem",
    border: "1px solid #e5e7eb",
    backgroundColor: "#eef2ff",
    color: "#1f2937",
    marginBottom: "1rem",
    width: "100%",
  };

  const buttonStyle = {
    padding: "0.75rem 1rem",
    backgroundColor: "#4f46e5",
    color: "white",
    border: "none",
    borderRadius: "0.75rem",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "1rem",
    marginTop: "0.5rem",
    transition: "all 0.2s ease-in-out",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>Schedule Workout</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="date"
            required
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            style={inputStyle}
          />

          <select
            required
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            style={inputStyle}
          >
            <option value="">Select Time</option>
            {timeOptions.map((time) => (
              <option key={time} value={time}>
                {formatTime(time)}
              </option>
            ))}
          </select>

          <select
            value={form.duration}
            onChange={(e) => setForm({ ...form, duration: e.target.value })}
            style={inputStyle}
          >
            <option value="30">30 minutes</option>
            <option value="60">60 minutes</option>
          </select>

          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            style={inputStyle}
          >
            <option value="gym">Gym</option>
            <option value="run">Run</option>
            <option value="any">Any</option>
          </select>

          <button type="submit" style={buttonStyle}>
            Schedule Workout
          </button>
        </form>
      </div>
    </div>
  );
}
