import React from 'react'
import './Project.css'
import Enwipe1 from '../../assets/enwipe1.png'
import Enwipe2 from '../../assets/enwipe2.png'
import Generic1 from '../../assets/GENERIC1.png'
import Generic2 from '../../assets/GENERIC2.png'
import Siddhi1 from '../../assets/Siddhi.png'
import Siddhi2 from '../../assets/Siddhi1.png'



const Project = () => {
    return (
        <div className='project'>
            <div className='left'>
                <h1 style={{color:"#Ffcc00"}}>Project Enwipe</h1>
                <p>Project ENWIPE which laid its foundation in 2017, initially steered through with an impact which was fairly decent. The idea bred in our minds when we observantly noticed the unwise use of water to wash cars. Our aim was to provide an eco-friendly solution and door step service of car wash.</p>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Enwipe1} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Enwipe2} className='img' alt='' />
                    </div>
                </div>
            </div>
            
            <div className='left'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Generic1} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Generic2} className='img' alt='' />
                    </div>
                </div>
            </div>
            <div className='right'>
                <h1 style={{color:"#Ffcc00"}}>Project Generic</h1>
                <p>Project Generic has been one of the most ingenious and ambitious projects implemented by Enactus KISS-KIIT. This project was based on a campaign launched by the Department of Pharmaceuticals, Government of India, known as "Pradhan Mantri Bhartiya Jan Aushadhi Pariyojana Kendra" (PMBJPK). The main aim of this project was to provide quality medicines at affordable prices to the masses.</p>
            </div>
            <div className='left'>
                <h1 style={{color:"#Ffcc00"}}>Project Siddhi</h1>
                <p>Project Siddhi was an initiative taken by ENACTUS KISS-KIIT in the year 2016, with a vision of providing opportunity to women and transgender, to change their lives for the better and in the process eliminating the use of plastic bags by replacing them with paper bags. ENACTUS has worked with many beneficiaries, helped transgenders and women from backward areas with employment.</p>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Siddhi2} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Siddhi1} className='img' alt='' />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Project
