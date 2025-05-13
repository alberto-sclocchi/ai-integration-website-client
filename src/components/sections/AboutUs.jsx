import Spline from '@splinetool/react-spline'
import React from 'react'


export default function AboutUs() {
  return (
    <div id="about-us" className="section">
      <div className="about-us-info">
        <h1>About Us</h1>
        <p>At <span style={{color:"plum", fontWeight:"900"}}>10th Capital AI</span>, we are a dedicated team of senior-level IT professionals with extensive experience supporting the<span style={{color:"plum", fontWeight:"900"}}> Department of Defense (DoD)</span> and other high-stakes environments. We specialize in delivering innovative and reliable technology solutions tailored to your business needs. With deep expertise in IT infrastructure, cybersecurity, cloud computing, and AI integration, we empower your organization to achieve greater efficiency, security, and competitive advantage. Our seasoned engineers and consultants partner closely with each client, ensuring customized, high-quality outcomes that drive lasting business success.</p>
      </div>
      
       <div className="robot" >
          <Spline scene="https://prod.spline.design/AcHgKAOxUgkMx0-9/scene.splinecode" />
        </div>
    </div>
  )
}
