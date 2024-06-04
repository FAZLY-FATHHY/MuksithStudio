import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import useMediaQuery from '@mui/material/useMediaQuery'; // Import useMediaQuery hook
import img1 from '../Assets/SAVE_20240521_142954 (1) copy.jpg';
import Container from './Container';


const icon = (
  <Paper
    sx={{
      m: 1,
      width: { xs: '100%', md: 500 },
      height: { xs: 'auto', md: 600 },
      marginTop: '120px',
      marginLeft: { xs: 0, md: '-1px' },
    }}
    elevation={2}
  >
    <Box
      component="img"
      src={img1} // Replace with your image URL
      alt="Image"
      sx={{
        width: '100%',
        height: { xs: 'auto', md: 600 },
        borderRadius: '10px'
      }}
    />
  </Paper>
);

const icon2 = (
  <Paper
    sx={{
      m: 1,
      width: { xs: '100%', md: 1000 },
      height: { xs: 'auto', md: 600 },
      marginTop: '120px',
      marginLeft: { xs: 0, md: '-1px' },
      backgroundColor: '#f0f0f0'
    }}
    elevation={2}
  >
    <Container />
  </Paper>
);

export default function SimpleGrow() {
  const [checked] = React.useState(true);
  const is620px = useMediaQuery('(max-width:620px)'); // Check if screen width is less than or equal to 620px

  return (
    <Box sx={{ width: '100%', marginTop: '80px', backgroundColor: '#f0f0f0' }}> {/* Adjust height to match the image */}
      <Box sx={{ display: is620px ? 'grid' : 'flex', flexDirection: is620px ? 'column' : 'row', gap: 2, backgroundColor: '#f0f0f0' }}> {/* Conditionally render grid or flex based on screen width */}
        <div className='groww1'>
          <Grow
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 8000 } : {})}
          >
            {icon}
          </Grow>
        </div>
        <div className='groww2'>
          <Grow
            in={checked}
            style={{ transformOrigin: '0 0 0', width: '100%' }}
            {...(checked ? { timeout: 8000 } : {})}
          >
            {icon2}
          </Grow>
        </div>
      </Box>
    </Box>
  );
}
