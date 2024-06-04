import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import img1 from '../Assets/Cards/sch.jpg';
import img2 from '../Assets/Cards/sch1.jpg';
import img3 from '../Assets/Cards/sch2.jpg';
import img4 from '../Assets/Cards/sch3.jpg';
import img5 from '../Assets/Cards/sch4.jpg';
import img6 from '../Assets/Cards/sch5.jpg';
import img7 from '../Assets/Cards/sch6.jpg';
import img8 from '../Assets/Cards/sch7.jpg';
import img9 from '../Assets/Cards/sch8.jpg';

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
];

export default function WovenImageList() {
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
