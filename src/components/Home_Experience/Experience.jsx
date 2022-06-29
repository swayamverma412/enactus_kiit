import React from "react";
import "./Experience.css";
const Experience = () => {

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        <div className="circle">8+</div>
        <span style={{color:" #FCA61F"}}>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" >20+</div>
        <span  style={{color:" #FCA61F"}}>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle">55+</div>
        <span style={{color:" #FCA61F"}}>Member</span>
      </div>
    </div>
  );
};

export default Experience;
