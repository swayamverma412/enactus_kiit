import React from "react";
import "./team_card.css";
import Gaurav from "../../img/profile2.jpg"
import Shreeja from "../../img/profile2.jpg"
import Harsh from "../../img/profile2.jpg"

import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'



const teamCard = () => {
    const team = [
      
    ]; 
     return (
        <div class="main">
        <div class="profile-card">
            <div class="img">
                <img src={Shreeja}/>
            </div>
            <div class="caption">
                <h3>Vin Diesel</h3>
                <p>Senior App Developer</p>
                <div class="social-links">
                    <a href="#"><i ><FaFacebook/></i></a>
                    <a href="#"><i ><FaTwitter/></i></a>
                    <a href="#"><i ><FaLinkedin/></i></a>
                </div>
            </div>
        </div>
        <div class="profile-card">
            <div class="img">
                <img src={Gaurav}/>
            </div>
            <div class="caption">
                <h3>David Corner</h3>
                <p>Front End Developer</p>
                <div class="social-links">
                <a href="#"><i ><FaFacebook/></i></a>
                    <a href="#"><i ><FaTwitter/></i></a>
                    <a href="#"><i ><FaLinkedin/></i></a>
                </div>
            </div>
        </div>
        <div class="profile-card">
            <div class="img">
                <img src={Harsh}/>
            </div>
            <div class="caption">
                <h3 style={{color:"#000000"}}>Tom Cruise</h3>
                <p>Full Stact Developer</p>
                <div class="social-links">
                <a href="#"><i><FaFacebook/></i></a>
                <a href="#"><i><FaTwitter/></i></a>
                <a href="#"><i><FaLinkedin/></i></a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default teamCard
