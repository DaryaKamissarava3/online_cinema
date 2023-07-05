import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getFilmList} from '../../store/actions/filmsActions';

export const Films = () => {
  const films = useSelector(state => state.film.films);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilmList());
  }, [dispatch]);

  return (
    <div>
      List of films
      <ul>
        {films.map((film) => (
          <li key={film.id}>
            ID: {film.id}<br/>
            Title: {film.title}<br/>
            Description: {film.description}<br/>
            Price: {film.price}<br/>
            Image: {film.image}<br/>
            startDate: {film.startDate}<br/>
            endDate: {film.endDate}<br/>
            tags: {film.tags}<br/>
          </li>
        ))}
      </ul>
    </div>
  );
};
