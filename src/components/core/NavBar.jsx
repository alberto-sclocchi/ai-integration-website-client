import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import homeIcon from '../../images/home-icon.png'
import logoIcon from '../../images/logo.png'

export default function NavBar() {
  return (
    <div id="navbar" >
      <div id="home-navbar-div">
        <Link to="#home-page" className="home-link"><img src={logoIcon} alt="logo"/></Link>
      </div>

      <div id="links-navbar-div">
        <Link to="#about-us" className="navbar-link">About Us</Link>
        {/* <Link to="#projects" className="navbar-link">Projects</Link> */}
        <Link to="#services" className="navbar-link">Services</Link>
        <Link to="#contact-info" className="navbar-link">Contact Info</Link>
        {/* <Link to="/messages" className="navbar-link">Messages</Link> */}

      </div>

      <div id="contact-us-navbar-div">
        <Link to="#contact-us" className="contact-us-link">Message Us</Link>
      </div>
    </div>
  )
}
