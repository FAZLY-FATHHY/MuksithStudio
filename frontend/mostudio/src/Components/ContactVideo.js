import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import './ContactVideo.css';

import backgroundImage from '../Assets/2024_06_04_03_18_IMG_6598.JPEG';  // Import the image

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.livestdui.lk/">
        Live Studio
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${backgroundImage})`,  // Use the imported image
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <br /><br />
            <Typography component="h5" variant="h8">

            Contact us today to discuss your ideal photography session. Our team of professional photographers will work closely with you to create a customized experience that captures your unique vision. Whether you're planning a family portrait, engagement shoot, or corporate event, we're here to bring your vision to life.

To ensure peace of mind, we require only a small deposit to confirm your booking. Rest assured, our dedicated team will be ready to welcome you to our studio and provide a warm, professional experience from start to finish.

Don't wait any longer to capture your special moments. Contact us now to start planning your unforgettable photography session!

            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <br /><br />
              <Typography
                variant="h7"
                component="h7"
                gutterBottom
                fontFamily={'"Caveat", cursive'}
                fontSize={'28px'}
              >
                * Contact-No : +94754245174
              </Typography>
              <br /><br />
              <Typography
                variant="h7"
                component="h7"
                gutterBottom
                fontFamily={'"Caveat", cursive'}
                fontSize={'28px'}
              >
                * Address : 323, Galle Road, Mount Lavinia, Colombo, Sri Lanka.
              </Typography>
              <br /><br />
              <Typography
                variant="h7"
                component="h7"
                gutterBottom
                fontFamily={'"Caveat", cursive'}
                fontSize={'28px'}
              >
                * E-mail : moookan123@gmail.com
              </Typography>
            </Box>
            <div className="socialmediaicons">
              <a href="https://www.facebook.com/profile.php?id=61554348149494&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                <FacebookIcon style={{ fontSize: 40, color: '#3b5998' }} />
              </a>
              <a href="https://www.instagram.com/the_gratify_tours?utm_source=qr&igsh=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" rel="noopener noreferrer">
                <InstagramIcon style={{ fontSize: 40, color: '#E1306C' }} />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <TwitterIcon style={{ fontSize: 40, color: '#00acee' }} />
              </a>
            </div>
            <Grid container justifyContent="center">
              <Grid item>
                <Copyright sx={{ mt: 5 }} />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
