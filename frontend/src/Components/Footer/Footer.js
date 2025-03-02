import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import React , {useEffect} from "react";

// Footer Component
const Footer = () => {
   return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>
            Atom Tickets
          </h2>
          <p>
            Your gateway to the movies.
          </p>
        </div>

        <div  className="footer-links">
          <ul>
            <li>Email: support@movietickets.com </li>
            <li>Phone: 047-22-48-572</li>
            <li>Address: 123 Cinema Lane, Movietown, Colombo</li>
           
          </ul>
        </div>

        <div className="footer-social">
          <a  href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a  href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 FilmBooking. All rights reserved.</p>
        <p>Privacy Policy | Terms of Service</p>
      </div>
    </footer>
    
  );
};

// Export Footer component
export default Footer;

