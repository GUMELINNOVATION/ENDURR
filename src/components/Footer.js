import React from "react";
import { pageLink, socialLink } from "../data";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                ENDURR
              </div>
              <p className="text-gray-400 mt-2 text-lg">
                Transform your fitness journey with virtual workout partners.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLink.map((link) => {
                const { id, href, icon } = link;
                return (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-cyan-500 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <i className={`${icon} text-white text-lg`}></i>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {pageLink.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <i className="fas fa-chevron-right text-cyan-500 text-xs mr-3 group-hover:translate-x-1 transition-transform duration-300"></i>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Features</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                <i className="fas fa-video text-cyan-500 text-sm mr-3"></i>
                Virtual Workouts
              </li>
              <li className="flex items-center hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                <i className="fas fa-users text-cyan-500 text-sm mr-3"></i>
                Partner Matching
              </li>
              <li className="flex items-center hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                <i className="fas fa-calendar text-cyan-500 text-sm mr-3"></i>
                Smart Scheduling
              </li>
              <li className="flex items-center hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                <i className="fas fa-chart-line text-cyan-500 text-sm mr-3"></i>
                Progress Tracking
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-4">
              Get the latest fitness tips and feature updates.
            </p>
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors duration-300">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <i className="fas fa-shield-alt text-cyan-500"></i>
                <span>We respect your privacy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-center md:text-left">
              <p>
                &copy; {new Date().getFullYear()} Gumel Innovation. All rights
                reserved.
              </p>
            </div>

            {/* Additional Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="/cookies"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center space-x-6 mt-6 pt-6 border-t border-white/10">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <i className="fas fa-lock text-green-500"></i>
              <span>Secure & Encrypted</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <i className="fas fa-globe text-cyan-500"></i>
              <span>Global Community</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <i className="fas fa-heart text-red-500"></i>
              <span>Made with Passion</span>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center z-50"
        >
          <i className="fas fa-chevron-up"></i>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
