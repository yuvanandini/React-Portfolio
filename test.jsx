import React from 'react'
import '../About/About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.png'
import React from 'react'
import '../About/About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.png'


const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>A goal-oriented Entry Level Frontend Developer with knowledge of HTML, CSS, JavaScript, React, Angular, and Vue seeking to use technical proficiency and creativity to develop engaging user experiences and advance in a professional career.</p>
                    <p> Looking to leverage effective debugging, code optimization and project collaboration capabilities to produce applications that exceed user expectations.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS </p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>React JS </p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About

