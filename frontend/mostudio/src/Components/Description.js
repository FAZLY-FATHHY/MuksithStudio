import "./Desciption.css"
import { useInView } from 'react-intersection-observer';

const Desciption = () =>
{

    const { ref: h1Ref, inView: h1InView } = useInView({ triggerOnce: true });
    const { ref: p1Ref, inView: p1InView } = useInView({ triggerOnce: true });
    const { ref: whyRef, inView: whyInView } = useInView({ triggerOnce: true });
    const { ref: captureRef, inView: captureInView } = useInView({ triggerOnce: true });
  

    return(

        <div className="destination">
<br />

<div className="collect">
<h1 ref={h1Ref} className={`navbar fade-in-section ${h1InView ? 'is-visible' : ''}`}>
<center>
Collect your memo's with our Photography 
</center>
</h1>
</div>

<br /><br />
<p ref={p1Ref} className={`navbar fade-in-section ${p1InView ? 'is-visible' : ''}`}>
Photography is essential in events for capturing and preserving memories, providing a visual record that helps with documentation and future planning. It plays a critical role in marketing and promotion, offering high-quality images for brochures, websites, and social media, thereby boosting visibility and engagement. Professional photographs enhance the event's credibility and perceived quality, while also capturing the atmosphere and emotions, creating a lasting impact. Moreover, these photos showcase the event's success, attracting future attendees and sponsors, and fostering a loyal audience.
</p>
<br /><br />

<div ref={whyRef} className={`navbar fade-in-section ${whyInView ? 'is-visible' : ''}`}>
<h1 className="why">
<center>
Why <span className="gratify-text"> US </span>
</center>
</h1>
</div>

<br /><br />
<p ref={captureRef} className={`navbar fade-in-section ${captureInView ? 'is-visible' : ''}`}>    
Capture the moments, make the memories last. At Mo Photography Studio, we specialize in transforming your events into timeless treasures. From weddings and family gatherings to corporate events and special occasions, we're here to ensure that every moment is captured with precision and passion. Let us make your events unforgettable, one click at a time.
</p>


</div>


    )
}

export default Desciption