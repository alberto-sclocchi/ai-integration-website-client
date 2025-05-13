import spaceImage from '../../images/space-image.jpg'
import { HashLink as Link } from 'react-router-hash-link'
import { useEffect, useRef } from 'react';


export default function HomePage() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

  
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      if (cursor) {
        const scrollVerticalOffset = window.scrollY;
        cursor.style.transform = `translate3d(${clientX - 40}px, ${clientY - 40 + scrollVerticalOffset}px, 0)`;
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
            <div className='home-button-container'>
              <Link to="#services" className="home-button">Explore Our Services</Link>
              <Link to="#about-us" className="home-button">Learn More About Us</Link>
            </div>  
          </div>
        </div> 
    </div>
  )
}
