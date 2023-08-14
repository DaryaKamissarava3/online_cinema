import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  img: {
    width: '100px',
    height: '100px',
  }
}));

export const NewsItem = ({image, date, text}) => {
  const classes = useStyles();
  return (
    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}} mt={1}>
      <img src={image} alt="News image" className={classes.img}/>
      <Box ml={3}>
        <Box sx={{fontSize: '12px'}}>{date}</Box>
        <Typography variant='body2' sx={{fontSize: '12px'}}>
          {text}
        </Typography>
      </Box>
    </Box>
  );
};
