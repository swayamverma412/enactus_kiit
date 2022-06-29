import React from "react";
import "./FooterStyles.css";
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'





const Footer = () => {
  return (
    <footer className="footer-color">
      <div className="wave" >
        
      </div>
        <ul className="social_icon">
          <li><a href="#"><i ><FaFacebook/></i></a></li>
          <li><a href="#"><i ><FaTwitter/></i></a></li>
          <li><a href="#"><i ><FaLinkedin/></i></a></li>

        </ul>
        <ul className="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Project</a>
          </li>
          <li>
            <a href="#">Event</a>
          </li>
          
           
        </ul>

      <p>
      Copyright © Enactus KIIT-KISS | All Right Reserved
      </p>
    </footer>

  );
};

export default Footer;
