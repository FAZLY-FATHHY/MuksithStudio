import React from 'react';
import SimpleGrow from '../Components/SimpleGrow';
import Navbar from '../Components/Navbar';
import './About.css'
import { useInView } from 'react-intersection-observer';


function About() {

  const { ref: navbarRef, inView: navbarInView } = useInView({ triggerOnce: true });

    return (
        <div className='fullCont' style={{ backgroundColor: '#f0f0f0', minHeight: '400vh', padding: '2px', width:'100%'}}>
            
           <div ref={navbarRef} className={`navbar fade-in-section ${navbarInView ? 'is-visible' : ''}`}>
        <Navbar />
      </div>     
            
            <div className="container">
                 <SimpleGrow />
                
            </div>
        </div>
    );
}

export default About;
