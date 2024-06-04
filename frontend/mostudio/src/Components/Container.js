import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useInView } from 'react-intersection-observer'; // Import the useInView hook
import './Container.css'; // Make sure to create and import a CSS file for the animation styles

export default function SimpleContainer() {
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true });
  return (
    <React.Fragment>
      <CssBaseline />
     
     <div className='contt'>

     <Container maxWidth="lg">
        <Box sx={{ p: 2,
          backgroundColor:'#f0f0f0', // Replace with your image URL
         // Optional: change text color for better contrast
        }}>
          <Typography
            ref={aboutRef}
            className={`fade-in-section ${aboutInView ? 'is-visible' : ''}`}
            variant="h5"
            component="h2"
            gutterBottom
            fontFamily={ '"Caveat", cursive'}
            fontSize={'28px'}
          >
            About Me
          </Typography>
          <Typography
            ref={aboutRef}
            className={`fade-in-section ${aboutInView ? 'is-visible' : ''}`}
            variant="body1"
            component="p"
            gutterBottom
            fontFamily={ '"Caveat", cursive'}
            fontSize={'28px'}
          >


About Jose
People often ask me how I developed my style, and how I create images that stand out in today’s highly competitive wedding market. Well, I am a fine art wedding photographer. My approach applies fine art photography to the living, breathing, fast-moving phenomenon that is a wedding. For me, it is all about making something beautiful. Ultimately, my goal is to craft vibrant, energetic, fine art images that are as unique as the people in the photographs.
I’m humbled to say that I have been published in many magazines around the world including, Martha Stewart Weddings,Vogue, Harpers Bazaar, Vogue Italia, Vogue Mexico, Vogue Bride Australia, Vogue Bride Japan, Geraldine Magazine, C Weddings, Flutter, The Knot, Instyle Weddings, Inside Weddings, BRIDES, Pacific Weddings, Cosmo Bride, PDN, American Photo, and many more around the world.
Named one the the top Wedding Photographers by Martha Stewart Weddings, Harpers Bazaar, Style Me Pretty, and Vogue; one of the top 10 wedding photographers in the world by American Photo Magazine, and one of the most influential photographers of our decade by PDN. </Typography>
 
          
        </Box>
      </Container>

     </div>

    </React.Fragment>
  );
}
