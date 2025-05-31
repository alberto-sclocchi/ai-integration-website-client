import React, { useEffect } from 'react'

export default function Services() {

  useEffect(() => {
    // Add hover effect logic
    const cards = document.querySelectorAll('.services-card');

    console.log(cards);
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        cards.forEach((otherCard) => {
          if (otherCard !== card) {
            otherCard.style.opacity = '0.5'; 
          } 
          
          if (otherCard === card) {
            otherCard.style.transform = 'scale(1.1)'; 
          }
        });
      });

      card.addEventListener('mouseleave', () => {
        cards.forEach((card) => {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        });
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <div id="services" className="section">
      <h1>Services</h1>

      <p>At <span style={{color: '#014f7f', fontWeight: "900"}}>10th Capital AI</span>, we offer a comprehensive suite of IT services designed to meet the unique needs of your business. Our team of experts is dedicated to delivering innovative solutions that drive efficiency, security, and growth.</p>
      
      <div className="services-cards-container">
        <div className="services-line">
          <div className="services-card">
            <h4>IT Infrastructure Solutions</h4>
            <ul>
              <li>Virtualization and Cloud Solutions (VMware, AWS, Azure)</li>
              <li>Network Architecture and Optimization</li>
              <li>Data Center Modernization and Management</li>
            </ul>
          </div>

          <div className="services-card">
            <h4>Cybersecurity & Compliance</h4>
            <ul>
              <li>Security Assessments and Audits</li>
              <li>Risk Management and Compliance Consulting</li>
              <li>Security Solutions (Endpoint Protection, SIEM, ZTA)</li>
            </ul>
          </div>
        </div>
        
        <div className="services-line">
          <div className="services-card">
            <h4>AI and Automation Integration</h4>
            <ul>
              <li>Workflow Automation</li>
              <li>AI-driven Business Insights and Analytics</li>
              <li>Machine Learning and Data Science Implementation</li>
            </ul>
          </div>

          <div className="services-card">
            <h4>Managed IT Services</h4>
            <ul>
              <li>24/7 System Monitoring and Support</li>
              <li>Disaster Recovery and Business Continuity</li>
              <li>IT Lifecycle and Asset Management</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}
