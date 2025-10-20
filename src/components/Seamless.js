import React from "react";

const Seamless = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50" id="seamless">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full mb-6 shadow-lg">
            Seamless Experience
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Get Stuff Done,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Seamlessly
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Book sessions, sync with your calendar, and join video calls directly
            from your browser, on desktop or mobile. No additional downloads
            required.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Visual Steps */}
          <div className="relative">
            {/* Background Elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            
            <div className="relative space-y-8">
              {/* Step 1 */}
              <div className="flex items-center space-x-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <i className="fas fa-calendar-check text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Book Your Sessions</h3>
                  <p className="text-gray-600">Easily schedule workouts with your fitness partners in just a few clicks.</p>
                </div>
                <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-center space-x-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 ml-8">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <i className="fas fa-sync-alt text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Sync to Your Calendar</h3>
                  <p className="text-gray-600">Automatic calendar integration keeps all your sessions organized.</p>
                </div>
                <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-center space-x-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 ml-16">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <i className="fas fa-video text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Join from Your Browser</h3>
                  <p className="text-gray-600">Instant video calls directly from your browser - no downloads needed.</p>
                </div>
                <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
              </div>
            </div>
          </div>

          {/* Feature Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                    <i className="fas fa-dumbbell text-cyan-600 text-xl"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Workout Session</div>
                    <div className="text-sm text-gray-500">Today • 6:00 PM</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold">45 mins</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Partner</span>
                    <span className="font-semibold text-cyan-600">Sarah M.</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Type</span>
                    <span className="font-semibold">Strength Training</span>
                  </div>
                </div>

                <button className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Join Session
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-cyan-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-green-100">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <i className="fas fa-clock text-white text-2xl"></i>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">5 million+</div>
            <div className="text-gray-600 font-medium">Completed Sessions</div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-blue-100">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <i className="fas fa-bullseye text-white text-2xl"></i>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">400 million+</div>
            <div className="text-gray-600 font-medium">Minutes of Focus</div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-red-100">
            <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <i className="fas fa-globe-americas text-white text-2xl"></i>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">150+ countries</div>
            <div className="text-gray-600 font-medium">User Locations</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <a 
            href="#features" 
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-cyan-300"
          >
            Explore Features
            <i className="fas fa-arrow-right ml-3"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Seamless;