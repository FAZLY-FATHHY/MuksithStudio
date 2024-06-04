import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CustomizedDialogs from './CustomizedDialogs2';
import img1 from '../Assets/Cards/wedd.jpg';

export default function ActionAreaCard_3() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: '350px',
        transition: 'transform 1s, box-shadow 1s',
        boxShadow: '0 5px 25px 2px rgba(0,0,0,0.11)',
        borderRadius: '9px',
        padding: '1.5rem .8rem',
        '&:hover': {
          transform: 'scale(1.2)',
          boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={img1}
          alt="school events"
          onClick={handleClick}
        />
        <CustomizedDialogs state={open} setOpen={setOpen} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Wedding Shoots
          </Typography>
          <Typography variant="body2" color="text.secondary">
           
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
