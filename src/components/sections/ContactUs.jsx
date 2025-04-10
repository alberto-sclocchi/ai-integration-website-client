import React from 'react'
import ContactUsForm from '../message/ContactUsForm.jsx'

export default function ContactUs() {
  return (
    <div id="contact-us" className="section">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, <span style={{color: 'plum', fontWeight: "900"}}>feel free to reach out using the form below.</span></p>
        <ContactUsForm />
    </div>
  )
}
