import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Signup.css";

const Signup = ({ onSignup }) => {

  // React Router navigation hook for redirecting users after successful signup
  const navigate = useNavigate(); 

  // State to store error message if signup fails
  const [error, setError] = useState("");

// Handle signup when the form is submitted
  const handleSignup = async (e) => {
    e.preventDefault();  // Prevent the default form submission behavior

    const full_name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      // Sending a POST request to the server with the user's details
        const response = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ full_name, email, password }),
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.message); // Displaying success message if response is okay
            onSignup(result.userId); // Pass the userId to onSignup
            navigate("/"); // Redirect to the home page after signup
        } 

        else {
            setError(result.error); // Set error message to be displayed if signup fails
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
