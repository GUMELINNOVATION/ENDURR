import React, { useState } from "react";

const Flexible = () => {
  const [activeTab, setActiveTab] = useState("30m");

  const sessions = {
    "30m": [
      {
        id: 1,
        time: "10:30am - 10:55am",
        user: "Yui K.",
        duration: "25m",
        type: "Quick Cardio",
        size: "small",
        color: "from-cyan-500 to-blue-500",
      },
      {
        id: 2,
        time: "2:15pm - 2:40pm",
        user: "Alex R.",
        duration: "25m",
        type: "Yoga Flow",
        size: "small",
        color: "from-green-500 to-teal-500",
      },
    ],
    "60m": [
      {
        id: 1,
        time: "4:00pm - 4:50pm",
        user: "Marwan S.",
        duration: "50m",
        type: "Strength Training",
        size: "medium",
        color: "from-purple-500 to-pink-500",
      },
      {
        id: 2,
        time: "6:30pm - 7:20pm",
        user: "Lisa T.",
        duration: "50m",
        type: "HIIT Workout",
        size: "medium",
        color: "from-orange-500 to-red-500",
      },
      {
        id: 3,
        time: "9:45pm - 11:00pm",
        user: "Shefali A.",
        duration: "75m",
        type: "Full Body Session",
        size: "large",
        color: "from-indigo-500 to-purple-500",
      },
    ],
  };

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-900 to-blue-900"
      id="flexible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Text Section */}
          <div className="text-white">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-6 border border-white/30">
              FLEXIBLE SCHEDULING
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Focus for a bit,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                or for a while.
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Whether you have 25 minutes or 2 hours, Endurr adapts to your
              schedule. Choose from quick sessions or extended workouts that fit
              perfectly into your day.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                  <i className="fas fa-clock text-white text-sm"></i>
                </div>
                <span className="text-gray-300">
                  Quick 25-minute sessions for busy days
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <i className="fas fa-dumbbell text-white text-sm"></i>
                </div>
                <span className="text-gray-300">
                  Standard 50-minute full workouts
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                  <i className="fas fa-infinity text-white text-sm"></i>
                </div>
                <span className="text-gray-300">
                  Extended sessions for intensive training
                </span>
              </div>
            </div>

            <a
              href="#pricing"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Explore Session Types
              <i className="fas fa-arrow-right ml-3"></i>
            </a>
          </div>

          {/* Right Visual Section */}
          <div className="relative">
            {/* Background Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              {/* Duration Tabs */}
              <div className="flex space-x-4 mb-8">
                {["30m", "60m"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeTab === tab
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                        : "bg-white/10 text-gray-300 hover:bg-white/20"
                    }`}
                  >
                    {tab} Sessions
                  </button>
                ))}
              </div>

              {/* Session Cards */}
              <div className="space-y-6">
                {sessions[activeTab].map((session) => (
                  <div
                    key={session.id}
                    className={`bg-gradient-to-r ${session.color} rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer group`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="text-white/90 text-sm font-medium mb-1">
                          {session.time}
                        </div>
                        <div className="text-white font-semibold text-lg">
                          {session.type}
                        </div>
                      </div>
                      <div className="bg-black/20 rounded-lg px-3 py-1">
                        <span className="text-white text-sm font-medium">
                          {session.duration}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <i className="fas fa-user text-white text-sm"></i>
                        </div>
                        <span className="text-white font-medium">
                          {session.user}
                        </span>
                      </div>

                      <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                          <i className="fas fa-edit text-white text-sm"></i>
                        </button>
                        <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                          <i className="fas fa-times text-white text-sm"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Session Button */}
              <button className="w-full mt-6 py-4 bg-white/10 border-2 border-dashed border-white/30 rounded-2xl text-white font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-3 group">
                <i className="fas fa-plus text-white/70 group-hover:text-white transition-colors"></i>
                <span>Add New Session</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">25m</div>
            <div className="text-gray-400">Quick Sessions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">50m</div>
            <div className="text-gray-400">Standard Workouts</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">75m+</div>
            <div className="text-gray-400">Extended Training</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flexible;
