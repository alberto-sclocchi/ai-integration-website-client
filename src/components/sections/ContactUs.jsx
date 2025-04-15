import React, { useContext } from 'react'
import ContactUsForm from '../message/ContactUsForm.jsx'
import geometricShape from '../../images/geometric-shape.png'

export default function ContactUs() {
  return (
    <div id="contact-us" className="section">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, <span style={{color: 'plum', fontWeight: "900"}}>feel free to reach out using the form below.</span></p>
        <div>
            <ContactUsForm />
            <div>
              <img src={geometricShape} alt="geometric-shape"/>
            </div>
        </div>
    </div>
  )
}
