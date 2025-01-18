import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="brand-title">Movie Ticket Booking</h1>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />

          <button type="submit" className="login-btn">Login</button>

          <p className="signup-link">
            Don't have an account? <a href="#signup">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
