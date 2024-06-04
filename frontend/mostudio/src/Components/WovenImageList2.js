import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import img1 from '../Assets/Cards/Wed1.jpg'
import img2 from '../Assets/Cards/wed2.jpg'
import img3 from '../Assets/Cards/wed3.jpg'
import img4 from '../Assets/Cards/wed4.jpg'
import img5 from '../Assets/Cards/wedd.jpg'
import img6 from '../Assets/Cards/wed7 (2).jpg'
import img7 from '../Assets/Cards/wed7.jpg'
import img8 from '../Assets/Cards/wed8.jpg'
import img9 from '../Assets/Cards/wed9.jpg'
import img10 from '../Assets/Cards/wedd.jpg'



export default function WovenImageList2() {
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
    img: img7,
    title: 'Laptop',
  },
  {
    img: img8,
    title: 'Doors',
  },
  {
    img: img9,
    title: 'Coffee',
  },
  {
    img: img10,
    title: 'Storage',
  },
  {
    img: img7,
    title: 'Laptop',
  },
  {
    img: img8,
    title: 'Doors',
  },
];
