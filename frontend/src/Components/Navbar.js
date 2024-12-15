import React from "react";
import "./Navbar.css";
/*import logo from '../../Assets/logo.png'*/

const Navbar = () => {
    return (
        <nav>
            
            <ul>
                <li>Home</li>
                <li>movies</li>
                <li>Seat Selection</li>
                <li>Payment</li>
                <li><button>Join Us</button></li>
            </ul>
        </nav>
    )
}

export default Navbar