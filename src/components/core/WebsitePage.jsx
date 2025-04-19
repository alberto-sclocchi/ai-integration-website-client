import React from 'react'
import AboutUs from '../sections/AboutUs'
import ContactUs from '../sections/ContactUs'
import Projects from '../sections/Projects'
import Services from '../sections/Services'

export default function WebsitePage() {
  return (
    <div className="website-body">
        <AboutUs />
        <Projects />
        <Services />
        <ContactUs />
    </div>
  )
}
