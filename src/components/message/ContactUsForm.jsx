import React from 'react'

export default function ContactUsForm() {

  return (
    <form id="contact-us-form">
        <div> 
            <input type="text" id="first-name" name="first-name"  placeholder='First Name'/>
            <input type="text" id="last-name" name="last-name"  placeholder='Last Name'/>
        </div>
        <div> 
            <input type="text" id="email" name="first-name"  placeholder='Email'/>
            <input type="text" id="phone-number" name="phone-number"  placeholder='Phone Number'/>
        </div>
    </form>
  )
}
