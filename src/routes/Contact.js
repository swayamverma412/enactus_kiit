import React from 'react'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import Training from '../components/Training'
import Footer from '../components/Footer/Footer'
import "./home.css"
const Contact = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='CONTACT.' text='Contact GLX Travel' />
            <div className="App" style={{color: "white"}} > 
            <Training/>           
            <Footer/>
             </div>
        </div>
    )
}

export default Contact
