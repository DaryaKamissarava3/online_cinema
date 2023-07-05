import React from 'react';

import './FilmsItem.css';

export const FilmsItem = ({title, price, imgUrl, startDate, endDate, tags}) => {
  return (
    <div className="film__item">
      <img src={imgUrl} className="film__item__img" alt="Film Image"/>
      <p className="film__item__title">{title}</p>
      <p>Price: {price}</p>
      <p>startDate: {startDate}</p>
      <p>endDate: {endDate}</p>
    </div>
  );
};
