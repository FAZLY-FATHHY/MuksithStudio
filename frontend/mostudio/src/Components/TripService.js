import './Tripcard.css'
import TripServiceData from './TripServiceData'
import TripServiceData1 from './TripServiceData1'
import TripServiceData2 from './TripServiceData2'
import { useInView } from 'react-intersection-observer';


function TripService() {

  const { ref: oneRef, inView: oneInView } = useInView({ triggerOnce: true });
  const { ref: twoRef, inView: twoInView } = useInView({ triggerOnce: true });
  const { ref: threeRef, inView: threeInView } = useInView({ triggerOnce: true });

  
  return (
    <div>

<div className='textt'>
<h2>
  Our Services
</h2>
</div>

<br /><br />

        <div className='tripcardss'>

<TripServiceData ref={oneRef} className={`navbar fade-in-section ${oneInView ? 'is-visible' : ''}`}/>
<br />
<TripServiceData1 ref={twoRef} className={`navbar fade-in-section ${twoInView ? 'is-visible' : ''}`}/>
<br />
<TripServiceData2 ref={threeRef} className={`navbar fade-in-section ${threeInView ? 'is-visible' : ''}`}/>    

        </div>
        
 
      </div>
  
  )
}

export default TripService


