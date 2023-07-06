import React from 'react';
import {Button} from '@mui/material';
import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {deleteFilm} from '../../store/actions/filmsActions';
import './FilmDetails.css';

export const FilmDetails = () => {
  window.scrollTo(0, 0);

  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const films = useSelector((state) => state.film.films);
  const userRole = useSelector((state) => state.user.user.role);

  const filmInformation = films.find((el) => {
    if (el.id === params.id) {
      return el;
    }
  });

  const handleDeleteFilm = () => {
    dispatch(deleteFilm(params.id));
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
          </div>
        </div>
      </section>
    </>
  );
};
