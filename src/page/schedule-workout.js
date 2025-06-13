import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./schedule-workout.css";

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

  return (
    <div className="schedule-container">
      <h1>Schedule Workout</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          required
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <select
          required
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
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
        >
          <option value="30">30 minutes</option>
          <option value="60">60 minutes</option>
        </select>

        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        >
          <option value="gym">Gym</option>
          <option value="run">Run</option>
          <option value="any">Any</option>
        </select>

        <button type="submit">Schedule Workout</button>
      </form>
    </div>
  );
}
