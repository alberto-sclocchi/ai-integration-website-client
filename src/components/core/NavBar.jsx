import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import homeIcon from '../../images/home-icon.png'

export default function NavBar() {
  return (
    <div id="navbar" >
      <div id="home-navbar-div">
        <Link to="#about-us" className="home-link"><img src={homeIcon} alt="home-icon"/></Link>
      </div>

      <div id="links-navbar-div">
        <Link to="#about-us" className="navbar-link">About Us</Link>
        <Link to="#projects" className="navbar-link">Projects</Link>
        <Link to="#projects" className="navbar-link">Item 1</Link>
        <Link to="#projects" className="navbar-link">Item 2</Link>
      </div>

      <div id="contact-us-navbar-div">
        <Link to="#contact-us" className="contact-us-link">Contact Us</Link>
      </div>
    </div>
  )
}
