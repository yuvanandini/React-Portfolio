import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'


const Navbar = () => {
  return (
    <div className='navbar d-none d-md-flex'>
       <img src={logo} alt="" style={{height:'150px', width:'150px'}} /> 
       <ul className="nav-menu">
        <li>Home</li>
        <li>About me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
       </ul>
       <div className="nav-connect">Connect with me</div>
    </div>
  )
}

export default Navbar