import React from 'react'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import Home from '../pages/Home/index';
import "./training.css"
import Footer from "../components/Footer/Footer";
import "./home.css";


const Training = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='TRAINING.' text='Pre-Flight & In-Flight Training.' />
            <div className="App" style={{color: "white"}} >          
            <div className='container'>
                <Home/>    
            </div>
            <Footer/>
             </div>
         </div>
    )
}

export default Training
