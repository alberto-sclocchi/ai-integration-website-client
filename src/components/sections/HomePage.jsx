import React, { useEffect, useRef, useState } from 'react'
import spaceImage from '../../images/space-image.jpg'
import Spline from '@splinetool/react-spline';


export default function HomePage() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

  
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      if (cursor) {
        const scrollVerticalOffset = window.scrollY;
        cursor.style.transform = `translate3d(${clientX - 20}px, ${clientY - 20 + scrollVerticalOffset}px, 0)`;
      }
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div id="home-page" className="section" >
        <div className="cursor-glow" ref={cursorRef}></div>
        <img src={spaceImage} alt="space" className="background-image" />
        
        <div className="background-container">
          <div className="background-info">
            <h3>WELCOME EVERYONE</h3>
            <p>Innovating the future, one solution at a time. We are creators, dreamers, and problem-solvers, turning ideas into reality to empower your success.</p>          
          </div>
        </div> 
    </div>
  )
}
