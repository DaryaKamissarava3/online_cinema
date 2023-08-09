import React, {useEffect, useState} from 'react';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import {useDispatch, useSelector} from 'react-redux';

import {deleteTickets} from '../../../store/actions/ticketActions';

import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.primary.main,
  },
  inf:{
    paddingLeft:theme.spacing(2),
    border:'1px solid #ccc',
    borderRadius:'10px'
  }
}));

export const TicketsItem = ({userId, ticketId, filmId, filmDate, ticketQuantity,}) => {
  const classes = useStyles();
  const [totalCost, setTotalCost] = useState(0);
  const dispatch = useDispatch();

  const films = useSelector((state) => state.film.films);
  const film = films.find((film) => film.id === filmId);

  const calculateTotalCost = () => {
    const cost = film.price * ticketQuantity;
    setTotalCost(cost);
  };

  useEffect(() => {
    calculateTotalCost();
  }, [film, ticketQuantity]);

  const handleDeleteTicket = () => {
    dispatch(deleteTickets(ticketId, userId));
  };

  return (
    <Card sx={{display: 'flex', boxShadow: '2px 3px 5px 3px rgba(0, 0, 255, 0.4)'}}>
      <CardMedia
        sx={{height: 320, width: 220}}
        image={film.image}
        title="film image"
      />
      <CardContent>
        <Typography variant='h6' className={classes.title} gutterBottom>
          {film.title}
        </Typography>
        <Typography mb={1} className={classes.inf}>
          One ticket cost :{film.price}
        </Typography>
        <Typography mb={1} className={classes.inf}>
          Date: {filmDate}
        </Typography>
        <Typography mb={1} className={classes.inf}>
          Tickets :{ticketQuantity}
        </Typography>
        <Typography mb={3} className={classes.inf}>
          Total tickets cost :{totalCost}
        </Typography>
        <Button variant='contained' onClick={handleDeleteTicket}>
          CANCEL THE BOOKING
        </Button>
      </CardContent>
    </Card>
  );
};
