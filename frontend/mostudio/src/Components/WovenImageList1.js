import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import img1 from '../Assets/Cards/birth1.jpg'
import img2 from '../Assets/Cards/birth2.jpg'
import img3 from '../Assets/Cards/birth3.jpg'
import img4 from '../Assets/Cards/Birthday.jpg'
import img5 from '../Assets/Cards/mod2.jpg'
import img6 from '../Assets/Cards/mod3.jpg'


export default function WovenImageList1() {
  return (
    <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=161&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: img1,
    title: 'Bed',
  },
  {
    img: img2,
    title: 'Kitchen',
  },
  {
    img: img3,
    title: 'Sink',
  },
  {
    img: img4,
    title: 'Books',
  },
  {
    img: img5,
    title: 'Chairs',
  },
  {
    img: img6,
    title: 'Candle',
  },
  {
    img: img1,
    title: 'Bed',
  },
  {
    img: img2,
    title: 'Kitchen',
  },
  {
    img: img3,
    title: 'Sink',
  },
  {
    img: img4,
    title: 'Books',
  },
  {
    img: img5,
    title: 'Chairs',
  },
  {
    img: img6,
    title: 'Candle',
  },
  {
    img: img1,
    title: 'Bed',
  },
  {
    img: img2,
    title: 'Kitchen',
  },
  {
    img: img3,
    title: 'Sink',
  },
  {
    img: img4,
    title: 'Books',
  },
  {
    img: img5,
    title: 'Chairs',
  },
  {
    img: img6,
    title: 'Candle',
  },
 
];
