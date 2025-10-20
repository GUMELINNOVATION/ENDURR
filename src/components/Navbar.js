import { useState } from "react";
import { pageLink } from "../data";
import { socialLink } from "../data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="relative">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                ENDURR
              </div>
              <div className="absolute inset-0 text-2xl font-bold text-gray-900 opacity-10 blur-sm">
                ENDURR
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {pageLink.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="text-gray-700 hover:text-cyan-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-50 relative group"
                >
                  {link.text}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLink.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-cyan-600 p-2 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
              >
                <i className={`${link.icon} text-lg`}></i>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <div className="flex space-x-2">
              {socialLink.slice(0, 2).map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 hover:text-cyan-600 p-2"
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-cyan-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 transition-all duration-300"
            >
              <i
                className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}
              ></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/80 backdrop-blur-md rounded-lg mt-2 border border-gray-100">
            {pageLink.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-gray-700 hover:text-cyan-600 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
            <div className="flex justify-center space-x-4 pt-4 border-t border-gray-200">
              {socialLink.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 hover:text-cyan-600 p-2 rounded-full hover:bg-gray-100 transition-all duration-300"
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
