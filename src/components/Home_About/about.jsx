import React from "react";
import "./about.css";
import Upwork from "../../img/Encube.png";
import Fiverr from "../../img/Enwipe.png";
import Amazon from "../../img/Enactus.png";
import Shopify from "../../img/Sankalp.png";
import Facebook from "../../img/Siddhi.png";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const About = () => {
  
  return (
    <div className="about" id="about">
      {/* left side */}
      <div className="a-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ fontSize:"1.5rem"}}>
            What does </span>

          <span  style={{color:"#FCA61F"}}>enactus do?</span>
          <spane>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Contact</button>
          </Link>
         
        </div>

        {/* right side */}
      </div>
      <div className="a-right">
        <motion.div
          initial={{ rotate: 0}}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="a-mainCircle"
        >
          <div className="a-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="a-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="a-secCircle" style={{border:"#ffff"}}>
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="a-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="a-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="a-backCircle blueCircle"></div>
        <div className="a-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default About;
