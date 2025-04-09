import React from 'react'
import AboutUs from '../sections/AboutUs'
import ContactUs from '../sections/ContactUs'
import Projects from '../sections/Projects'

export default function WebsitePage() {
  return (
    <div className="website-body">
        <AboutUs />
        <Projects />
        <ContactUs />
    </div>
  )
}
