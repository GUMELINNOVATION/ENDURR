import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden"
      id="home"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Welcome to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Endurr
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          Endurr connects you with workout buddies online, wherever you are.
          Schedule your gym sessions, stay motivated, and crush your fitness
          goals together!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/auth"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
          >
            Join for free
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              ></path>
            </svg>
          </Link>

          <Link
            to="/dashboard"
            className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-blue-300 flex items-center justify-center"
          >
            Try demo
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </Link>
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl font-bold text-cyan-400">10K+</div>
            <div className="text-gray-300">Active Members</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl font-bold text-purple-400">500+</div>
            <div className="text-gray-300">Workout Partners</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl font-bold text-pink-400">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
