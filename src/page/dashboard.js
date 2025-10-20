import React, { useState } from "react";
import { Calendar, Menu, X, Settings, LogOut, User, Bell } from "lucide-react";
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

  const handleJoinWorkout = (session) => {
    const alreadyJoined = upcomingWorkouts.some((w) => w.id === session.id);
    if (alreadyJoined) {
      alert("You already joined this workout.");
      return;
    }

    const newWorkout = {
      id: session.id,
      partnerName: session.user.name,
      time: session.time,
      activity: session.task,
    };

    setUpcomingWorkouts((prev) => [...prev, newWorkout]);
    alert(`You joined ${session.user.name}'s workout at ${session.time}`);
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

  const [hoverSessionId, setHoverSessionId] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 lg:hidden"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Endurr</h1>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <Bell size={20} />
            </button>
            <div className="flex items-center space-x-3">
              <img
                src={currentUser.avatar}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm font-medium text-gray-700">
                {currentUser.name}
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`
          fixed lg:static inset-y-0 left-0 z-50 w-80 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }
        `}
        >
          <div className="flex flex-col h-full p-6">
            {/* Mobile close button */}
            <div className="flex justify-end lg:hidden mb-4">
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            {/* Schedule Workout Button */}
            <button
              onClick={() => navigate("/schedule-workout")}
              className="w-full bg-cyan-600 text-white py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors mb-8"
            >
              Schedule Workout
            </button>

            {/* Upcoming Workouts */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Calendar size={20} className="mr-2" />
                Upcoming Workouts
              </h3>

              {upcomingWorkouts.length > 0 ? (
                <div className="space-y-3">
                  {upcomingWorkouts.map((workout) => (
                    <div
                      key={workout.id}
                      className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-semibold text-gray-900">
                            {workout.partnerName}
                          </p>
                          <p className="text-sm text-gray-600">
                            {workout.time}
                          </p>
                          <p className="text-sm text-gray-600">
                            {workout.activity}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleJoinWorkout(workout)}
                            className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition-colors"
                          >
                            Join
                          </button>
                          <button
                            onClick={() => handleCancelWorkout(workout.id)}
                            className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">
                  No upcoming workouts scheduled.
                </p>
              )}
            </div>

            {/* Session Settings */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Session Settings
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {["gym", "run", "any"].map((task) => (
                  <button
                    key={task}
                    onClick={() => setSelectedTask(task)}
                    className={`p-3 rounded-lg border transition-colors ${
                      selectedTask === task
                        ? "bg-cyan-600 text-white border-cyan-600"
                        : "bg-white text-gray-700 border-gray-300 hover:border-cyan-300"
                    }`}
                  >
                    <div className="text-lg mb-1">{workoutEmojis[task]}</div>
                    <div className="text-xs font-medium">
                      {task.charAt(0).toUpperCase() + task.slice(1)}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Partner Preference */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Partner Preference
              </h3>
              <div className="space-y-2">
                {["favorites", "anyone"].map((pref) => (
                  <button
                    key={pref}
                    onClick={() => setPartnerPreference(pref)}
                    className={`w-full p-3 rounded-lg border transition-colors text-left ${
                      partnerPreference === pref
                        ? "bg-cyan-600 text-white border-cyan-600"
                        : "bg-white text-gray-700 border-gray-300 hover:border-cyan-300"
                    }`}
                  >
                    {pref === "favorites" ? "❤️ Favorites" : "🌐 Anyone"}
                  </button>
                ))}
              </div>
            </div>

            {/* Tip Card */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
              <p className="text-sm text-blue-800">
                💡 <strong>Tip:</strong> Enable "Quiet Mode" in settings to
                train silently or focus solo.
              </p>
            </div>

            {/* Footer Links */}
            <div className="mt-auto pt-6 border-t border-gray-200">
              <div className="flex space-x-4 text-sm text-gray-500">
                <a href="#" className="hover:text-gray-700">
                  Privacy
                </a>
                <a href="#" className="hover:text-gray-700">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Calendar Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <div className="flex items-center space-x-4 mb-4 lg:mb-0">
              <div className="flex items-center space-x-2 text-gray-700">
                <Calendar size={20} />
                <span className="text-lg font-semibold">June 2025</span>
              </div>
            </div>

            <div className="flex space-x-2">
              {["Day", "25m", "50m", "75m"].map((view) => (
                <button
                  key={view}
                  onClick={() => setTimeView(view)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    timeView === view
                      ? "bg-cyan-600 text-white"
                      : "bg-white text-gray-700 border border-gray-300 hover:border-cyan-300"
                  }`}
                >
                  {view}
                </button>
              ))}
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="grid grid-cols-8 border-b border-gray-200">
              <div className="p-4"></div>
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
                  <div
                    key={day}
                    className={`p-4 text-center font-semibold ${
                      isToday ? "bg-cyan-50 text-cyan-600" : "text-gray-700"
                    }`}
                  >
                    {day}
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-8">
              {/* Time Column */}
              <div className="border-r border-gray-200">
                {times.map((time) => (
                  <div
                    key={time}
                    className="h-16 border-b border-gray-100 flex items-center justify-end pr-4 text-sm text-gray-500"
                  >
                    {time}
                  </div>
                ))}
              </div>

              {/* Day Columns */}
              {days.map((day) => (
                <div
                  key={day}
                  className="border-r border-gray-200 last:border-r-0"
                >
                  {times.map((time) => {
                    const cellSessions = sessions.filter(
                      (s) => s.day === day && s.time === time
                    );

                    return (
                      <div
                        key={time}
                        className="h-16 border-b border-gray-100 p-1 relative"
                      >
                        {cellSessions.map((session) => (
                          <div
                            key={session.id}
                            className="absolute top-1 left-1"
                            onMouseEnter={() => setHoverSessionId(session.id)}
                            onMouseLeave={() => setHoverSessionId(null)}
                          >
                            <img
                              src={session.user.avatar}
                              alt={session.user.name}
                              className="w-8 h-8 rounded-full border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform"
                            />

                            {/* Tooltip */}
                            {hoverSessionId === session.id && (
                              <div className="absolute z-10 w-64 p-4 bg-white rounded-lg shadow-lg border border-gray-200 top-full left-0 mt-2">
                                <div className="flex items-center space-x-3 mb-3">
                                  <img
                                    src={session.user.avatar}
                                    alt={session.user.name}
                                    className="w-10 h-10 rounded-full"
                                  />
                                  <div>
                                    <p className="font-semibold text-gray-900">
                                      {session.user.name}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                      {session.time} • {session.duration} min
                                    </p>
                                  </div>
                                </div>
                                <p className="text-sm text-gray-700 mb-3">
                                  {workoutEmojis[session.task]}{" "}
                                  {session.task.charAt(0).toUpperCase() +
                                    session.task.slice(1)}
                                </p>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleJoinWorkout(session);
                                  }}
                                  className="w-full bg-cyan-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-cyan-700 transition-colors"
                                >
                                  Join Session
                                </button>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
