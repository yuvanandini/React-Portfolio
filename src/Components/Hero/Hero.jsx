import React from 'react'
import './hero.css'
import profile from '../../assets/profile_img.png'

const Hero = () => {
  return (
    <div className='Hero'>
        <img src={profile} alt="" />
        <h1><span>I'm Yuva Nandini Dharmada,</span> frontend developer based in Kakinada.</h1>
        <p>In this tutorial you will learn to build and deploy complete responsive portfolio website using React JS.</p>
        <div className='hero-action'>
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero