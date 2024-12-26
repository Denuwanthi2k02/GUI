import React from "react";
import "./Navbar.css";
import logo from '../Assets/logo.jpg'

const Navbar = () => {
    return (
        <nav className="container">
          <img src={logo} alt="" className="logo"/>
            <ul>
                <li>Home</li>
                <li>movies</li>
                <li>Seat Selection</li>
                <li>Payment</li>
                <li><button className="btn">Join Us</button></li>
            </ul>
        </nav> 
    )
}

export default Navbar