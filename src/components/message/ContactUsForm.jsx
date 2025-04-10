import React, { useState } from 'react'
import { countriesPhoneCodes } from './data/CountriesPhoneCodes'

export default function ContactUsForm() {

    const phoneCodesInputs = countriesPhoneCodes.map((countries) => {
        return (
            <option key={countries.code} value={countries.code}>
                {countries.country} (+{countries.code})
            </option>
        )
    })


  return (
    <form id="contact-us-form">
        <div> 
            <input type="text" id="first-name" name="first-name"  placeholder='First Name' className="name-input"/>
            <input type="text" id="last-name" name="last-name"  placeholder='Last Name' className="name-input"/>
        </div>
        <input type="text" id="email" name="first-name"  placeholder='Email' className="only-input"/>
        <div className="phone-number-div"> 
            <select id="country-code" name="country-code">
                <option value="" disabled>
                    Select Country Code
                </option>
                {phoneCodesInputs}
            </select>
            <input type="text" id="phone-number" name="phone-number"  placeholder='Phone Number'/>
        </div>
        <textarea type="text" name="message" className="only-input" placeholder='Tell us your message...'/>
        <button>Submit</button>
    </form>
  )
}
