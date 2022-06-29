import React from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { Link } from "react-scroll";
const Intro = () => {
 
  

  return (
    <div className="Intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span >enactus</span>
          <span  style={{color:"#FCA61F"}}>KIIT-KISS</span>
          <span>
          Enactus is the world’s largest experiential<br></br> learning platform dedicated to creating a better world
          <br></br> developing the next generation of entrepreneurial<br></br> leaders and social innovators...
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Contact Us</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
       
      </div>
    </div>
  );
};

export default Intro;
