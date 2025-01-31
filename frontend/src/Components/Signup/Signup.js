import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Signup.css";

const Signup = ({ onSignup }) => {

  const navigate = useNavigate(); // React Router navigation hook
  const [error, setError] = useState("");


  const handleSignup = async (e) => {
    e.preventDefault();
    const full_name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ full_name, email, password }),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        onSignup();
        navigate("/"); // Redirect to the home page after signup
      } else {
        setError(result.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="signup-page">
    <div className="signup-container" id="signup">
      <div className="signup-card">
        <h1 className="brand-title">Movie Ticket Booking</h1>
        <form onSubmit={handleSignup}>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your full name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />

          <button type="submit" className="signup-btn">Sign Up</button>

          {error && <p className="error">{error}</p>}

          <p className="login-link">
            Already have an account?{" "} <a href="/login" >Log in</a>
          </p>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Signup;
