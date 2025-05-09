import React from 'react'
import spaceImage from '../../images/space-image.jpg'

export default function HomePage() {
  return (
    <div id="home-page" className="section">
        <img src={spaceImage} alt="space" className="background-image" />
        <h3>HELLO</h3>
    </div>
  )
}
