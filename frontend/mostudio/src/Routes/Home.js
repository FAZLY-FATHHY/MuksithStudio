import React from 'react';
import BgVideo from '../Components/BgVideo';
import './Home.css';
import Navbar from '../Components/Navbar';
import Description from '../Components/Description';
import TripService from '../Components/TripService';
import { useInView } from 'react-intersection-observer';
import UnderText from '../Components/UnderText';
import Footer from '../Components/Footer';

const Home = ({ state, setOpen }) => {
  const { ref: navbarRef, inView: navbarInView } = useInView({ triggerOnce: true });
  
  const { ref: descriptionRef, inView: descriptionInView } = useInView({ triggerOnce: true });
  const { ref: tripServiceRef, inView: tripServiceInView } = useInView({ triggerOnce: true });

  return (
    <div className='container'>
      <div ref={navbarRef} className={`navbar fade-in-section ${navbarInView ? 'is-visible' : ''}`}>
        <Navbar />
      </div>

      <div>
        <BgVideo />
      </div>

      <div className='background'>
        <div ref={descriptionRef} className={`description fade-in-section ${descriptionInView ? 'is-visible' : ''}`}>
          <Description />
        </div>
      </div>

      <div ref={tripServiceRef} className={`cards fade-in-section ${tripServiceInView ? 'is-visible' : ''}`}>
        <TripService />
      </div>

      <div className='UnderText'>
        <UnderText />
      </div>

    <Footer/>

    </div>
  );
};

export default Home;
