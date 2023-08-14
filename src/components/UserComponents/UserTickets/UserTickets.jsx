import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTickets } from '../../../store/actions/ticketActions';
import { TicketsItem } from '../TicketsItem';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export const UserTickets = () => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.user.user.id);
  const tickets = useSelector((state) => state.ticket.tickets);

  useEffect(() => {
    dispatch(getTickets(userId));
  }, [dispatch, userId]);

  return (
    <Container>
      <Typography variant="h4" mt={7} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>MY
        TICKETS
      </Typography>
      <Grid container spacing={3} mt={4}>
        {tickets.map((item) => (
          <Grid item xs={12} md={6} lg={6}>
            <TicketsItem
              userId={userId}
              ticketId={item.id}
              filmId={item.filmID}
              filmDate={item.filmDate}
              ticketQuantity={item.ticketQuantity}
              key={item.id}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
