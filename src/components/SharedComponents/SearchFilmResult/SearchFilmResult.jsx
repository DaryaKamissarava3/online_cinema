import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FilmsItem } from '../FilmsItem';

import './SearchFilmResult.css';

export const SearchFilmResult = ({ isActiveBlock,foundResultsOfSearch }) => {
  const [arrowMin] = useState(0);
  const [arrowMax, setArrowMax] = useState(8);

  const arrowMore = () => {
    setArrowMax(arrowMax + 8);
  };

  return (
    <section className={isActiveBlock ? 'section products-list' : 'hide'}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-subtitle underline">Search results</h2>
        </div>
        <div className="film__block__items">
          {foundResultsOfSearch.slice(arrowMin, arrowMax).map((item) =>
            (
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
        </div>
        {!(arrowMax >= foundResultsOfSearch.length || foundResultsOfSearch.length < 8) && (
          <button className="btn-show-more" onClick={arrowMore} >Show more</button>
        )}
      </div>
    </section>
  );
};
