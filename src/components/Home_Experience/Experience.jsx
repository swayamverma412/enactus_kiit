import React from "react";
import "./Experience.css";
const Experience = () => {

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        <div className="circle">8+</div>
        <span style={{color:"#ffbf00"}}>Years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" >20+</div>
        <span  style={{color:"#ffbf00"}}>Completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle">55+</div>
        <span  style={{color:"#ffbf00"}}>Working</span>
        <span>Member</span>
      </div>
    </div>
  );
};

export default Experience;
