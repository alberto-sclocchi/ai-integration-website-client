import React from 'react'
import ContactUsForm from '../message/ContactUsForm.jsx'

export default function ContactUs() {
  return (
    <div id="contact-us" className="section">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out using the form below.</p>
        <ContactUsForm />
    </div>
  )
}
