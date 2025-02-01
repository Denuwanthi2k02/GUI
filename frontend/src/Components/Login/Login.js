import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Navigation hook from React Router

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const result = await response.json();

        if (response.ok) {
            alert(result.message); // Login success
            onLogin(result.userId); // Pass the userId to onLogin
            navigate("/"); // Redirect to home page
        } else {
            setError(result.error); // Login failed
        }
    } catch (error) {
        console.error('Error:', error);
        setError('An error occurred. Please try again.');
    }
};

  return (
  <div className="login-page">
    <div className="login-container">
      <div className="login-card">
        <h1 className="brand-title">Movie Ticket Booking</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn">Login</button>

          {error && <p className="error">{error}</p>}

          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;
