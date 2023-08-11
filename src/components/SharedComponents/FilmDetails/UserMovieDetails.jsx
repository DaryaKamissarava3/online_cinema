import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bookedTicket } from '../../../store/actions/ticketActions';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: '100%'
  },
  cost: {
    border: '1px solid',
    borderColor: theme.palette.primary.main,
    borderRadius: '20px',
    padding: theme.spacing(1),
  },
  dateBtn: {
    margin: theme.spacing(2)
  }
}));

const UserMovieDetails = ({filmInformation, params}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const userId = useSelector((state) => state.user.user.id);

  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };

  const handleBookingTicket = () => {
    const filmId = params.id;

    const ticketData = {
      userId,
      filmId,
      selectedDate,
      ticketQuantity,
    };

    dispatch(bookedTicket(ticketData));
    navigate('/');
  };

  const generateDateButtons = () => {
    const buttons = [];
    const startDate = new Date(filmInformation.startDate);
    const endDate = new Date(filmInformation.endDate);

    for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
      const formattedDate = date.toLocaleDateString('en-US', {day: 'numeric', month: 'short', year: 'numeric'});
      buttons.push(
        <Button
          key={formattedDate}
          variant={selectedDate === formattedDate ? 'contained' : 'outlined'}
          onClick={() => handleDateSelection(formattedDate)}
          sx={{margin: '3px'}}
        >
          {formattedDate}
        </Button>
      );
    }

    return buttons;
  };

  return (
    <Grid container spacing={2}>
      <Grid item lg={3}>
        <img
          src={filmInformation.image}
          alt="Movie Image"
          className={classes.img}
        />
      </Grid>
      <Grid item lg={8} mr={2}>
        <Grid container ml={5} direction='column'>
          <Grid item lg={3}>
            <Typography variant='h5' color='primary' mb={2} sx={{textDecoration: 'underline'}}>
              {filmInformation.title}
            </Typography>
          </Grid>
          <Grid item lg={3}>
            <Typography variant='body1' mb={2}>
              {filmInformation.description}
            </Typography>
          </Grid>
          <Grid item lg={3}>
            <Box sx={{width: '150px'}}>
              <Typography variant='inherit' mb={2} className={classes.cost}>
                One ticket cost: {filmInformation.price}
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={3}>
            Tags: {filmInformation.tags}
          </Grid>
          <Grid item lg={3}>
            {generateDateButtons()}
          </Grid>
          <Grid item lg={3}>
            <Box mb={2} mt={2}>
              <FormControl sx={{width: '10%'}}>
                <InputLabel id="ticketsSelectLabel">Tickets</InputLabel>
                <Select
                  labelId="ticketsSelectLabel"
                  id="ticketsSelect"
                  value={ticketQuantity}
                  label="Tickets"
                  onChange={(event) => setTicketQuantity(event.target.value)}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item lg={3}>
            <Button
              variant='contained'
              onClick={handleBookingTicket}
            >
              BOOK TICKETS
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserMovieDetails;