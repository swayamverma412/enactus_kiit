import React from 'react'
import './Project.css'
import Pod from '../../assets/pod.jpg'
import Moon from '../../assets/moon.jpg'

const Project = () => {
    return (
        <div className='project'>
            <div className='left'>
                <h1 style={{color:"#Ffcc00"}}>Training</h1>
                <p>Thorough training is a necessity when traveling to space. We offer all inclusive training for pre-flight and in-flight scenarios.</p>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Moon} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Pod} className='img' alt='' />
                    </div>
                </div>
            </div>
            
            <div className='left'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Moon} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Pod} className='img' alt='' />
                    </div>
                </div>
            </div>
            <div className='right'>
                <h1 style={{color:"#Ffcc00"}}>Training</h1>
                <p>Thorough training is a necessity when traveling to space. We offer all inclusive training for pre-flight and in-flight scenarios.</p>
            </div>
        </div>
    )
}

export default Project
