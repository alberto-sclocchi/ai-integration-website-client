import React from 'react'
import AboutUs from '../sections/AboutUs'
import ContactUs from '../sections/ContactUs'
import Projects from '../sections/Projects'
import Services from '../sections/Services'
import ContactInfo from '../sections/ContactInfo'
import HomePage from '../sections/HomePage'
import Scroller from '../sections/Scroller'

export default function WebsitePage() {
  return (
    <div className="website-body">
        <HomePage />
        <AboutUs />
        <Scroller />
        {/* <Projects /> */}
        <Services />
        <ContactInfo />
        <ContactUs />
    </div>
  )
}
