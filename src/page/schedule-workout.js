import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Dumbbell, MapPin } from "lucide-react";

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
    location: "",
    notes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const workout = {
      day: new Date(form.date).toDateString(),
      time: formatTime(form.time),
      duration: form.duration,
      type: form.type,
      location: form.location,
      notes: form.notes,
    };

    const sessions = JSON.parse(localStorage.getItem("workouts") || "[]");
    sessions.push(workout);
    localStorage.setItem("workouts", JSON.stringify(sessions));

    navigate("/dashboard");
  };

  const formatTime = (time24) => {
    const [h, m] = time24.split(":").map(Number);
    const period = h >= 12 ? "PM" : "AM";
    const hour = h % 12 === 12 ? 12 : h % 12;
    return `${hour}:${m.toString().padStart(2, "0")} ${period}`;
  };

  const timeOptions = generateTimeOptions();

  const workoutTypes = [
    { value: "gym", label: "🏋️ Gym", icon: "🏋️" },
    { value: "run", label: "🏃 Run", icon: "🏃" },
    { value: "yoga", label: "🧘 Yoga", icon: "🧘" },
    { value: "cycling", label: "🚴 Cycling", icon: "🚴" },
    { value: "swimming", label: "🏊 Swimming", icon: "🏊" },
    { value: "any", label: "💪 Any", icon: "💪" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Dashboard
          </button>

          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Schedule Workout
            </h1>
            <p className="text-gray-600">
              Plan your session and find workout partners
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <Calendar size={16} className="mr-2" />
                Date
              </label>
              <input
                type="date"
                required
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <Clock size={16} className="mr-2" />
                Time
              </label>
              <select
                required
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
              >
                <option value="">Select a time</option>
                {timeOptions.map((time) => (
                  <option key={time} value={time}>
                    {formatTime(time)}
                  </option>
                ))}
              </select>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "30", label: "30 min" },
                  { value: "45", label: "45 min" },
                  { value: "60", label: "60 min" },
                  { value: "75", label: "75 min" },
                  { value: "90", label: "90 min" },
                  { value: "120", label: "2 hours" },
                ].map((duration) => (
                  <button
                    key={duration.value}
                    type="button"
                    onClick={() =>
                      setForm({ ...form, duration: duration.value })
                    }
                    className={`py-3 px-4 border rounded-lg text-sm font-medium transition-colors ${
                      form.duration === duration.value
                        ? "bg-cyan-600 text-white border-cyan-600"
                        : "bg-white text-gray-700 border-gray-300 hover:border-cyan-300"
                    }`}
                  >
                    {duration.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Workout Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Workout Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                {workoutTypes.map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setForm({ ...form, type: type.value })}
                    className={`py-3 px-4 border rounded-lg text-sm font-medium transition-colors ${
                      form.type === type.value
                        ? "bg-cyan-600 text-white border-cyan-600"
                        : "bg-white text-gray-700 border-gray-300 hover:border-cyan-300"
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <span>{type.icon}</span>
                      <span>{type.label.replace(/[^\w\s]/g, "")}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <MapPin size={16} className="mr-2" />
                Location (Optional)
              </label>
              <input
                type="text"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                placeholder="e.g., Central Park, Home Gym, Virtual"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
              />
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes (Optional)
              </label>
              <textarea
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                placeholder="Any specific goals, equipment needed, or preferences..."
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors resize-none"
              />
            </div>

            {/* Privacy Settings */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Session Visibility
              </label>
              <div className="space-y-2">
                {[
                  {
                    value: "public",
                    label: "🌐 Public - Anyone can join",
                    description: "Visible to all Endurr users",
                  },
                  {
                    value: "friends",
                    label: "👥 Friends Only",
                    description: "Only your friends can see and join",
                  },
                  {
                    value: "private",
                    label: "🔒 Private Session",
                    description: "Just for you or invite specific people",
                  },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="privacy"
                      value={option.value}
                      className="mt-1 text-cyan-600 focus:ring-cyan-500"
                      defaultChecked={option.value === "public"}
                    />
                    <div>
                      <div className="font-medium text-gray-900">
                        {option.label}
                      </div>
                      <div className="text-sm text-gray-500">
                        {option.description}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-cyan-600 text-white py-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors shadow-sm flex items-center justify-center"
            >
              <Calendar size={20} className="mr-2" />
              Schedule Workout
            </button>

            {/* Quick Tips */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                💡 <strong>Pro tip:</strong> Scheduling workouts in advance
                helps you stay consistent and makes it easier to find workout
                partners!
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
