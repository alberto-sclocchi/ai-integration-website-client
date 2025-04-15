import React, { useContext, useEffect, useState } from 'react'
import { countriesPhoneCodes } from './data/CountriesPhoneCodes'
import MessageContext from './context/MessageContext.context';

export default function ContactUsForm() {

    const [formData, setFormData]= useState ({
        firstName: '',
        lastName: '',
        email: '',
        countryCode: '',
        phoneNumber: '',
        message: ''
    })

    const {sendMessage, result } = useContext(MessageContext);

    //track formData changes
    // useEffect(() =>{
    //     console.log(formData);
    // }, [formData])


    const handleChange = (event) => {
        setFormData((prevData) => ({...prevData,[event.target.name]: event.target.value}));
        console.log({[event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        sendMessage(formData);

        setTimeout(() =>{
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                countryCode: '',
                phoneNumber: '',
                message: ''
            })
        }, 300)
    }

    const phoneCodesInputs = countriesPhoneCodes.map((countries, index) => {
        return (
            <option key={index} value={countries.code}>
                {countries.country} (+{countries.code})
            </option>
        )
    })




  return (
    <form id="contact-us-form">
        <div className='result-form-div'>{!!result && <p className='result-form'> {result } </p> }</div>
        <div> 
            <input type="text" id="first-name" name="firstName"  placeholder='First Name' className="name-input" value={formData.firstName} onChange={handleChange}/>
            <input type="text" id="last-name" name="lastName"  placeholder='Last Name' className="name-input" value={formData.lastName} onChange={handleChange}/>
        </div>
        <input type="text" id="email" name="email"  placeholder='Email Address' className="only-input" value={formData.email} onChange={handleChange}/>
        <div className="phone-number-div"> 
            <select id="country-code" name="countryCode" onChange={handleChange} value={formData.countryCode}>
                <option value="" disabled>
                    Select Country Code
                </option>
                {phoneCodesInputs}
            </select>
            <input type="text" id="phoneNumber" name="phoneNumber"  placeholder='Phone Number' value={formData.phoneNumber} onChange={handleChange}/>
        </div>
        <textarea type="text" id="message" name="message" className="only-input" placeholder='Tell us your message...' value={formData.message} onChange={handleChange}/>
        <button onClick={handleSubmit}>Submit</button>
    </form>
  )
}
