import React, {useState} from 'react';
import {Button, Select, MenuItem} from '@mui/material';
import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {deleteFilm} from '../../store/actions/filmsActions';
import {bookedTicket} from '../../store/actions/ticketActions';

import './FilmDetails.css';

export const FilmDetails = () => {
  window.scrollTo(0, 0);

  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const films = useSelector((state) => state.film.films);
  const userRole = useSelector((state) => state.user.user.role);
  const userId = useSelector((state) => state.user.user.id);

  const [selectedDate, setSelectedDate] = useState('');
  const [ticketQuantity, setTicketQuantity] = useState(1);

  const filmInformation = films.find((el) => {
    if (el.id === params.id) {
      return el;
    }
  });

  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };

  const generateDateButtons = () => {
    const buttons = [];
    const startDate = new Date(filmInformation.startDate);
    const endDate = new Date(filmInformation.endDate);

    for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
      const formattedDate = date.toLocaleDateString('en-US', {day: 'numeric', month: 'short', year: 'numeric'});
      buttons.push(
        <button
          key={formattedDate}
          className={`date-button ${selectedDate === formattedDate ? 'selected' : ''}`}
          onClick={() => handleDateSelection(formattedDate)}
        >
          {formattedDate}
        </button>
      );
    }

    return buttons;
  };

  const handleDeleteFilm = () => {
    dispatch(deleteFilm(params.id));
    navigate('/');
  };

  const handleBookingTicket = () => {
    const filmId = params.id;

    const ticketData = {
      userId: userId,
      filmId: filmId,
      selectedDate: selectedDate,
      ticketQuantity: ticketQuantity,
    };

    dispatch(bookedTicket(ticketData));
    navigate('/');
  };

  return (
    <>
      <section className="film__details">
        <div className="film__inner">
          <div className="film__image first-block">
            <div>
              <img src={filmInformation.image} className="film-img" alt="img"/>
            </div>
          </div>
          <div className="film__description__block">
            <div className="film__title">{filmInformation.title}</div>
            <div className="film__description">{filmInformation.description}</div>
            <div className="film__price">Cost: {filmInformation.price} $</div>
            <div className="film__start__date">Film start date: {filmInformation.startDate}</div>
            <div className="film__end__date">Film end date:{filmInformation.endDate}</div>
            <div className="film__tags">Tags: {filmInformation.tags}</div>
            <div>
              {userRole === 'admin' && (
                <div>
                  <Button onClick={handleDeleteFilm}>DELETE FILM</Button>
                </div>
              )}
            </div>
            <div>
              {userRole === 'user' && (
                <>
                  <div className="date-buttons-container">{generateDateButtons()}</div>
                  <Select
                    value={ticketQuantity.toString()}
                    onChange={(event) => setTicketQuantity(event.target.value)}
                  >
                    <MenuItem value={1}>1 Ticket</MenuItem>
                    <MenuItem value={2}>2 Tickets</MenuItem>
                    <MenuItem value={3}>3 Tickets</MenuItem>
                    <MenuItem value={4}>4 Tickets</MenuItem>
                    <MenuItem value={5}>5 Tickets</MenuItem>
                  </Select>
                  <div>
                    <Button onClick={handleBookingTicket}>BOOK TICKET</Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
