import React from 'react'
import './Openpage.css'
import { useInView } from 'react-intersection-observer';
import TextButton from '../Components/TextButton'

function ContactUs() {

  const { ref: navbarRef, inView: navbarInView } = useInView({ triggerOnce: true });

  return (
    <div className='backimg'>

<div  ref={navbarRef} className={`navbar fade-in-section ${navbarInView ? 'is-visible' : ''}`}>
 
<TextButton/>

</div>

    </div>
  )
}

export default ContactUs
