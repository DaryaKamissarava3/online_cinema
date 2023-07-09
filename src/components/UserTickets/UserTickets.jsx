import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTickets } from '../../store/actions/ticketActions';

import { TicketsItem } from '../TicketsItem';

import './UserTickets.css';

export const UserTickets = () => {
  const userId = useSelector((state) => state.user.user.id);
  const tickets = useSelector((state) => state.ticket.tickets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTickets(userId));
  }, [dispatch, userId]);

  return (
    <div className="user__tickets__container">
      <h2 className="user__tickets__title">My Tickets</h2>
      {tickets.map((item) => (
        <TicketsItem
          userId={userId}
          ticketId={item.id}
          filmId={item.filmID}
          filmDate={item.filmDate}
          ticketQuantity={item.ticketQuantity}
          key={item.id}
        />
      ))}
    </div>
  );
};
