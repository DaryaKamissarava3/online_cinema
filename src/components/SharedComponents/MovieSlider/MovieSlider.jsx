import React from 'react';
import { makeStyles } from '@mui/styles';

import Carousel from 'react-material-ui-carousel';
import Box from '@mui/material/Box';

import MovieItem from './MovieItem';

import imagesData from './../../../assets/arrays/carousel.json';

const useStyles = makeStyles((theme) => ({
  carouselContainer: {
    maxWidth: '100%',
    margin: '0 auto',
  },
}));

export const MovieSlider = () => {
  const classes = useStyles();

  return (
    <Box className={classes.carouselContainer}>
      <Carousel  indicators={false} >
        {
          imagesData.map(item => <MovieItem key={item.id} item={item}/>)
        }
      </Carousel>
    </Box>
  );
};
