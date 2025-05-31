import React from 'react'

export default function ContactInfo() {
  return (
    <div className="section" id="contact-info">
        <h1>Contact Information</h1>
        <p>Ready to elevate your business with <span style={{color:"#014f7f", fontWeight:"900"}}>cutting-edge IT solutions</span>? Reach out today:</p>
        <ul>
            <li><span style={{color:"#014f7f", fontWeight:"900"}}>Phone: </span> +1 (305) 977-9227</li>
            <li><span style={{color:"#014f7f", fontWeight:"900"}}>Email: </span> <a href="mailto:info@10thcapital.ai">info@10thcapital.ai</a></li>
        </ul>
    </div>
  )
}
