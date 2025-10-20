import React from "react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      step: "1",
      title: "Create Your Account",
      description:
        "Sign up with your email and set your fitness preferences, availability, and time zone.",
      icon: "fas fa-user-plus",
      color: "from-cyan-500 to-blue-500",
      features: ["Quick setup", "Fitness preferences", "Time zone sync"],
    },
    {
      step: "2",
      title: "Schedule a Workout",
      description:
        "Pick a date and time you want to work out. You can invite a partner or join a public session.",
      icon: "fas fa-calendar-alt",
      color: "from-purple-500 to-pink-500",
      features: ["Flexible timing", "Partner matching", "Public sessions"],
    },
    {
      step: "3",
      title: "Join the Virtual Gym",
      description:
        "At your scheduled time, join the video call and start working out together!",
      icon: "fas fa-video",
      color: "from-orange-500 to-red-500",
      features: ["Browser-based", "Real-time video", "Interactive sessions"],
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
      id="how-it-works"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            How to Use{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Endurr
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Endurr connects you with people around the world to work out
            together, stay motivated, and achieve your fitness goals — all
            online.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-600 mb-2">2min</div>
              <div className="text-sm text-gray-500">Setup Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">
                100%
              </div>
              <div className="text-sm text-gray-500">Browser Based</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2">
                24/7
              </div>
              <div className="text-sm text-gray-500">Available</div>
            </div>
          </div>
        </div>

        {/* Steps Section */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500 transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((item, index) => (
              <div key={item.step} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-gray-100 relative overflow-hidden">
                  {/* Background Gradient */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} rounded-full filter blur-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <i className={`${item.icon} text-white text-2xl`}></i>
                    </div>
                    <div className="text-4xl font-bold text-gray-200 group-hover:text-gray-300 transition-colors">
                      {item.step}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {item.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <i className="fas fa-check text-green-500 mr-3"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Step Indicator */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-400">
                      Step {item.step}
                    </span>
                    <div
                      className={`w-8 h-8 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center`}
                    >
                      <i className="fas fa-arrow-right text-white text-xs"></i>
                    </div>
                  </div>
                </div>

                {/* Mobile Connector */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <div className="w-1 h-16 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full"></div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto relative z-10">
              Join the Endurr community and start building your fitness habit
              with others — no matter where you are.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link
                to="/auth"
                className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center"
              >
                Sign Up Now
                <i className="fas fa-arrow-right ml-3"></i>
              </Link>

              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 inline-flex items-center justify-center">
                Learn More
                <i className="fas fa-info-circle ml-3"></i>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-8 mt-8 relative z-10">
              <div className="flex items-center space-x-2 text-white/80">
                <i className="fas fa-shield-alt"></i>
                <span className="text-sm">Secure & Private</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <i className="fas fa-globe"></i>
                <span className="text-sm">Global Community</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <i className="fas fa-clock"></i>
                <span className="text-sm">Flexible Scheduling</span>
              </div>
            </div>
          </div>

          {/* Bottom Trust Section */}
          <div className="mt-12">
            <p className="text-gray-500 text-sm mb-6">
              TRUSTED BY FITNESS ENTHUSIASTS WORLDWIDE
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">10K+</div>
              <div className="text-2xl font-bold text-gray-400">
                ACTIVE USERS
              </div>
              <div className="text-2xl font-bold text-gray-400">50+</div>
              <div className="text-2xl font-bold text-gray-400">COUNTRIES</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
