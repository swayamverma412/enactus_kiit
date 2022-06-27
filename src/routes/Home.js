import React from 'react'
import Navbar from '../components/Navbar'
import Intro from "../components/Intro/Intro";
import Services from "../components/Services/Services";
import "./home.css";
import Experience from "../components/Experience/Experience";
import Works from "../components/Works/Works";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function Home() {
    
    return (
        <div>
        <Navbar />

      <div
        className="App" style={{color: "white"}} >
            <Intro />
            <Services />
            <Experience />
            <Works />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
        </div>
    )
}

export default Home
