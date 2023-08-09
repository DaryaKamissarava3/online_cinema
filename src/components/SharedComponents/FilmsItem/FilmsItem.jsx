import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  ratingContainer: {
    position: 'absolute',
    top: '-4%',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    backgroundColor: theme.palette.primary.dark,
    color: 'white',
    borderRadius: '50%',
    zIndex: '3'
  },
  ageLimit: {
    padding:'3px',
    width: '30px',
    borderRadius: '20%',
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  }
}));

export const FilmsItem = ({title, price, imgUrl, startDate, endDate,}) => {
  const classes = useStyles();

  const formattedStartDate = new Date(startDate).toLocaleDateString();
  const formattedEndDate = new Date(endDate).toLocaleDateString();

  const rating = 9;
  const age = 12;

  return (
    <Card sx={{maxWidth: 280, margin: '20px 20px', position: 'relative', overflow: 'visible'}}>
      <Box className={classes.ratingContainer}>
        <Typography variant="body2">
          {rating}
        </Typography>
      </Box>
      <CardMedia
        sx={{height: 380, width: 260}}
        image={imgUrl}
        title="film image"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          Price: {price}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          Dates: {formattedStartDate}-{formattedEndDate}
        </Typography>
        <Typography className={classes.ageLimit} variant="body2">
          {age}+
        </Typography>
      </CardContent>
    </Card>
  );
};
