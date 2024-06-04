import React from 'react'
import './UnderText.css'
import { useInView } from 'react-intersection-observer';


function UnderText() {

    const { ref: imgRef, inView: imgInView } = useInView({ triggerOnce: true });
    const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });
  

  return (
    <div className='fullContainer'>
     <div ref={imgRef} className={`fade-in-section-UnderText ${imgInView ? 'is-visible-UnderText' : ''}`}>
     <img src="https://www.daisakuikeda.org/nature/template/images/ikeda_photo_overview.jpg" alt="" />
    
     </div>

    <div className='underText'>

    <h2 ref={textRef} className={`fade-in-section-UnderText ${textInView ? 'is-visible-UnderText' : ''}`}>
    “Photography is a way of feeling, spaof touching, of loving. <br />
     What you have caught on film is captured forever… <br />
      It remembers little things, long after you have forgotten everything.” <br />
                 — Aaron Siskind
    </h2>

    </div>

    </div>

   
  )
}

export default UnderText;
