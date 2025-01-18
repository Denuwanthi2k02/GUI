
import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import React , {useEffect} from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
   useEffect(()=>{
                Aos.init({duration:2000})
            },[])

  return (
    <footer className="footer">
      <div data-aos="fade-up" data-aos-duration="2000" className="footer-content">
        <div className="footer-logo">
          <h2>Atom Tickets</h2>
          <p>Your gateway to the movies.</p>
        </div>
        <div  className="footer-links">
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
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
      </div>
    </footer>
  );
};

export default Footer;

