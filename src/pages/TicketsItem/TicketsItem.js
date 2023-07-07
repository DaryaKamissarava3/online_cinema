import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import './TicketsItem.css';

export const TicketsItem = ({filmId, filmDate, ticketQuantity}) => {
  const [totalCost, setTotalCost] = useState(0);

  const films = useSelector((state) => state.film.films);
  const film = films.find((film) => film.id === filmId);

  useEffect(() => {
    calculateTotalCost();
  }, [film, ticketQuantity]);

  const calculateTotalCost = () => {
    const cost = film.price * ticketQuantity;
    setTotalCost(cost);
  };

  return (
    <div className="ticket__item__block">
      <div>
        <img className="ticket__film__image" src={film.image} alt="film img"/>
      </div>
      <div className="ticket__inf__block">
        <div className="ticket__film__title">{film.title}</div>
        <div className="ticket__inf">One ticket cost : {film.price}</div>
        <div className="ticket__inf">{filmDate}</div>
        <div className="ticket__inf">Tickets : {ticketQuantity}</div>
        <div className="ticket__inf">Total tickets cost : {totalCost}</div>
      </div>
    </div>
  );
};
