import React from 'react';

import './FilmsItem.css';

export const FilmsItem = (
  {
    title,
    price,
    imgUrl,
    startDate,
    endDate
  }) => {
  return (
    <div className="film__item">
      <img src={imgUrl} className="film__item__img" alt="Film Image" />
      <p className="film__item__title">
        {title}</p>
      <p className="film__item__field">
        Price: {price}
      </p>
      <p className="film__item__field">
        startDate: {startDate}
      </p>
      <p className="film__item__field">
        endDate: {endDate}
      </p>
    </div>
  );
};
