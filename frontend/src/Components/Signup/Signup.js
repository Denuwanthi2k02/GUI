import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-container" id="signup">
      <div className="signup-card">
        <h1 className="brand-title">Movie Ticket Booking</h1>
        <form>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your full name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />

          <button type="submit" className="signup-btn">Sign Up</button>

          <p className="login-link">
            Already have an account? <a href="#login">Log in</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
