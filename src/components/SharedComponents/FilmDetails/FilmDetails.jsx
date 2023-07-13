import React, { useState } from 'react';
import {
  Button,
  Select,
  MenuItem,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { deleteFilm, updateFilm } from '../../../store/actions/filmsActions';
import { bookedTicket } from '../../../store/actions/ticketActions';

import './FilmDetails.css';

export const FilmDetails = () => {
  window.scrollTo(0, 0);

  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const films = useSelector((state) => state.film.films);
  const userRole = useSelector((state) => state.user.user.role);
  const userId = useSelector((state) => state.user.user.id);

  const filmInformation = films.find((el) => {
    if (el.id === params.id) {
      return el;
    }
  });

  const [title, setTitle] = useState(filmInformation.title);
  const [description, setDescription] = useState(filmInformation.description);
  const [price, setPrice] = useState(filmInformation.price);
  const [startDate, setStartDate] = useState(filmInformation.startDate);
  const [endDate, setEndDate] = useState(filmInformation.startDate);
  const [tags, setTags] = useState(filmInformation.tags);

  const [selectedDate, setSelectedDate] = useState('');
  const [ticketQuantity, setTicketQuantity] = useState(1);

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
      userId,
      filmId,
      selectedDate,
      ticketQuantity,
    };

    dispatch(bookedTicket(ticketData));
    navigate('/');
  };

  const handleUpdateFilm=()=>{
    const updatedFilm={
      id:filmInformation.id,
      title:title,
      description:description,
      price:price,
      startDate:startDate,
      endDate:endDate,
      tags:tags,
    }

    dispatch(updateFilm(updatedFilm));
  }
  return (
    <section className="film__details">
      <div className="film__inner">
        <div className="film__image first-block">
          <div>
            <img src={filmInformation.image} className="film-img" alt="img"/>
          </div>
        </div>
        <div className="film__description__block">
          <div>
            {userRole === 'admin' && (
              <>
                <div className="film__title">
                  Title:
                  <br />
                  <TextField
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="film__description__admin">
                  Description:
                  <br />
                  <TextField
                    value={description}
                    multiline
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="film__price">
                  Cost:
                  <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      startAdornment={<InputAdornment position="start">$</InputAdornment>}
                      label="Amount"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </FormControl>
                </div>
                <div className="film__start__date">
                  Film start date:
                  <TextField
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
                <div className="film__end__date">
                  Film end date:
                  <TextField
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
                <div className="film__tags">
                  Tags:
                  <TextField
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                  />
                </div>
                <Button onClick={handleUpdateFilm}>Update film </Button>
                <br/>
                <Button onClick={handleDeleteFilm}>DELETE FILM</Button>
              </>
            )}
          </div>
          <div>
            {userRole === 'user' && (
              <>
                <div className="film__title">
                  {filmInformation.title}
                </div>
                <div className="film__description">
                  {filmInformation.description}
                </div>
                <div className="film__price">
                  Cost:
                  {filmInformation.price} $
                </div>
                <div className="film__start__date">
                  Film start date:
                  {filmInformation.startDate}
                </div>
                <div className="film__end__date">
                  Film end date:
                  {filmInformation.endDate}
                </div>
                <div className="film__tags">
                  Tags:
                  {filmInformation.tags}
                </div>
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
  );
};
