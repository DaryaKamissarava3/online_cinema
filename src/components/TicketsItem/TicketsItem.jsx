import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

import { deleteTickets } from '../../store/actions/ticketActions';

import './TicketsItem.css';

export const TicketsItem = (
  {
    userId,
    ticketId,
    filmId,
    filmDate,
    ticketQuantity,
  }) => {
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
    <div className="ticket__item__block">
      <div>
        <img className="ticket__film__image" src={film.image} alt="film img" />
      </div>
      <div className="ticket__inf__block">
        <div className="ticket__film__title">
          {film.title}
        </div>
        <div className="ticket__inf">
          One ticket cost : {film.price}
        </div>
        <div className="ticket__inf">
          {filmDate}
        </div>
        <div className="ticket__inf">
          Tickets : {ticketQuantity}
        </div>
        <div className="ticket__inf">
          Total tickets cost : {totalCost}
        </div>
        <Button onClick={handleDeleteTicket}>
          CANCEL THE BOOKING
        </Button>
      </div>
    </div>
  );
};
