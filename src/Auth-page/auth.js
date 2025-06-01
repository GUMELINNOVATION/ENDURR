import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import "./AuthPage.css";

const AuthPage = () => {
  const [tab, setTab] = useState("login");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy logic - replace with real auth check
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "test@example.com" && password === "password") {
      navigate("/dashboard"); // ✅ redirect
    } else {
      alert("Invalid login credentials");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-tabs">
          <button
            type="button"
            className={`auth-tab ${tab === "login" ? "active" : ""}`}
            onClick={() => setTab("login")}
          >
            Login
          </button>
          <button
            type="button"
            className={`auth-tab ${tab === "signup" ? "active" : ""}`}
            onClick={() => setTab("signup")}
          >
            Sign Up
          </button>
        </div>

        {tab === "login" ? (
          <form className="auth-form" onSubmit={handleLogin}>
            <input type="email" name="email" placeholder="Email" required />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <div className="forgot-password">Forgot Password?</div>
            <button type="submit" className="auth-btn">
              Login
            </button>
            <div className="divider">or login with</div>
            <div className="social-btns">
              <button type="button">
                <FcGoogle /> Google
              </button>
              <button type="button">
                <FaApple /> Apple
              </button>
              <button type="button">
                <FaFacebook /> Facebook
              </button>
            </div>
          </form>
        ) : (
          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <div className="name-fields">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <input type="date" required />
            <select required defaultValue="">
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input type="text" placeholder="Location" required />
            <button type="submit" className="auth-btn">
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
