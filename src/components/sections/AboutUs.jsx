import React from 'react'
import logoIcon from '../../images/logo.png'


export default function AboutUs() {
  return (
    <div id="about-us" className="section">
      <div className="about-us-info">
        <h1>About Us</h1>
        <p>At <span style={{color:"#014f7f", fontWeight:"900"}}>10th Capital AI</span>, we are a dedicated team of senior-level IT professionals with extensive experience supporting the<span style={{color:"#014f7f", fontWeight:"900"}}> Department of Defense (DoD)</span> and other high-stakes environments. We specialize in delivering innovative and reliable technology solutions tailored to your business needs. With deep expertise in IT infrastructure, cybersecurity, cloud computing, and AI integration, we empower your organization to achieve greater efficiency, security, and competitive advantage. Our seasoned engineers and consultants partner closely with each client, ensuring customized, high-quality outcomes that drive lasting business success.</p>
      </div>
      
        <div className="robot" >
          <img src={logoIcon} alt="logo"/>
          <iframe
            src="https://my.spline.design/genkubgreetingrobot-mZTZEOnuMJhj7PyVmfhXpEeu/"
            width="100%"
            height="450px"
            title="Greeting Robot"
            style={{ border: "none" }}
          />        
        </div>
    </div>
  )
}
