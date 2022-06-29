import React, { useContext } from "react";
import "./value.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { motion } from "framer-motion";
import Resume from './resume.pdf';
import Moon from '../../assets/moon.jpg'

const Value = () => {
  
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="value" id="value">
      <div className="awesome">
        <span style={{ color: "white"  }}>What</span>
        <span style={{color:"#ffbf00"}}>we believe in?</span>
        <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br/>
          ispum is simpley dummy text of printing
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download</button>
        </a>
      </div>
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}>
          <Card
            emoji={HeartEmoji}
            heading={"Integrity"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}/>

        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "8rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}>
          <Card
            emoji={Glasses}
            heading={"Innovation"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}/>
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}>
          <Card
            emoji={Humble}
            heading={"Collaboration"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"/>
        </motion.div>

      </div>
    </div>
  );
};

export default Value;
