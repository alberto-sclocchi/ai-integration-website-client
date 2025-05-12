import React, { useEffect, useRef, useState } from 'react'
import spaceImage from '../../images/space-image.jpg'

export default function HomePage() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

  
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      if (cursor) {
        const scrollOffset = window.scrollY || document.documentElement.scrollTop; // Get the scroll position
        cursor.style.transform = `translate3d(${clientX - 20}px, ${clientY - 20 + scrollOffset}px, 0)`;
      }
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div id="home-page" className="section" >
          <div className="cursor-glow" ref={cursorRef}></div>
        <img src={spaceImage} alt="space" className="background-image" />
        <h3>HELLO</h3>
    </div>
  )
}
