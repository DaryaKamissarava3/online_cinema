import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getFilmList } from '../../store/actions/filmsActions';

import { FilmsItem } from '../FilmsItem';
import { Slider } from '../Slider';

import More from '../../assets/images/more.svg';
import './Films.css';

export const Films = () => {
  const films = useSelector((state) => state.film.films);
  const dispatch = useDispatch();

  const [minNumberImg, setMinNumberImg] = useState(0);
  const [maxNumberImg, setMaxNumberImg] = useState(4);

  useEffect(() => {
    dispatch(getFilmList());
  }, [dispatch]);

  const scrollAhead = () => {
    setMaxNumberImg(maxNumberImg + 1);
    setMinNumberImg(minNumberImg + 1);
  };

  const scrollBack = () => {
    setMaxNumberImg(maxNumberImg - 1);
    setMinNumberImg(minNumberImg - 1);
  };

  return (
    <div className="film__container">
      <h1 className="film__block__title">Films</h1>
      <div className="film__block">
        <div className="film__block__items">
          <Slider
            sliderBtn={More}
            changeSlide={scrollBack}
            classForBtn="minus"
            minNumberOfImg={minNumberImg}
          />
          {films.slice(minNumberImg, maxNumberImg).map((item) => (
            <Link className="film-link" to={`/films/${item.id}`} key={item.id}>
              <FilmsItem
                title={item.title}
                price={item.price}
                imgUrl={item.image}
                startDate={item.startDate}
                endDate={item.endDate}
                key={item.id}
              />
            </Link>
          ))}
          <Slider
            sliderBtn={More}
            changeSlide={scrollAhead}
            classForBtn="plus"
            maxNumberOfImg={maxNumberImg}
            numberOfImg={films.length}
          />
        </div>
      </div>
    </div>
  );
};
