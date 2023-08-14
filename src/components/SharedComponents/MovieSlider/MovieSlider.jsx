import React from 'react';
import { MovieItem } from './MovieItem';

import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel';

import imagesData from './../../../assets/arrays/carousel.json';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  carouselContainer: {
    maxWidth: '100%',
    margin: '0 auto',
  },
}));

export const MovieSlider = () => {
  const classes = useStyles();

  return (
    <div className="container">
      <Box className={classes.carouselContainer}>
        <Carousel indicators={false}>
          {
            imagesData.map(item => <MovieItem key={item.id} item={item}/>)
          }
        </Carousel>
      </Box>
    </div>
  );
};
