import React from 'react'
import Navbar from '../components/Navbar'
import TeamCard from '../components/Team_Cards/team_card'
import HeroImage from '../components/HeroImage'
import Footer from "../components/Footer/Footer";
import "./pricing.css";
import Header from '../components/Home/Header';





const Pricing = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='PRICING.' text='Choose your trip.' />
            <div className='container'>   
            <Header/>
 
             </div>
             <div className="App"  style={{color: "white"}}>     
             <TeamCard/>
             <Footer />
        </div>
        </div>
    )
}

export default Pricing
