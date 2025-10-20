import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";

const AuthPage = () => {
  const [tab, setTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "test@example.com" && password === "password") {
      navigate("/dashboard");
    } else {
      alert("Invalid login credentials");
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Auth Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="text-center pt-8 pb-6">
            <div className="text-3xl font-bold text-gray-900 mb-2">ENDURR</div>
            <p className="text-gray-600">
              {tab === "login" ? "Welcome back" : "Join our fitness community"}
            </p>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              type="button"
              className={`flex-1 py-4 font-semibold transition-colors ${
                tab === "login"
                  ? "text-cyan-600 border-b-2 border-cyan-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setTab("login")}
            >
              Login
            </button>
            <button
              type="button"
              className={`flex-1 py-4 font-semibold transition-colors ${
                tab === "signup"
                  ? "text-cyan-600 border-b-2 border-cyan-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setTab("signup")}
            >
              Sign Up
            </button>
          </div>

          {/* Forms */}
          <div className="p-8">
            {tab === "login" ? (
              <form className="space-y-6" onSubmit={handleLogin}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors pr-12"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      Remember me
                    </span>
                  </label>
                  <button
                    type="button"
                    className="text-sm text-cyan-600 hover:text-cyan-700"
                  >
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-600 text-white py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors shadow-sm"
                >
                  Sign In
                </button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    className="flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <FcGoogle className="text-lg" />
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <FaApple className="text-lg text-gray-800" />
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <FaFacebook className="text-lg text-blue-600" />
                  </button>
                </div>
              </form>
            ) : (
              <form className="space-y-4" onSubmit={handleSignup}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors pr-12"
                      placeholder="Create a password"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors pr-12"
                      placeholder="Confirm your password"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gender
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                      required
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                    placeholder="Your city"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-600 text-white py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors shadow-sm mt-4"
                >
                  Create Account
                </button>

                <p className="text-center text-gray-600 text-sm mt-4">
                  By signing up, you agree to our{" "}
                  <a href="#" className="text-cyan-600 hover:text-cyan-700">
                    Terms
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-cyan-600 hover:text-cyan-700">
                    Privacy Policy
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Demo Note */}
        <div className="text-center mt-6 text-gray-600 text-sm">
          <p>Demo: test@example.com / password</p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
