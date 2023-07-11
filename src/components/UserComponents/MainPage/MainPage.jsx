import React, { useState } from 'react';
import { Footer } from '../../SharedComponents/Footer';
import { Films } from '../../SharedComponents/Films';
import { UserMenu } from '../UserMenu';
import { Header } from '../../SharedComponents/Header';
import { SearchFilmResult } from '../../SharedComponents/SearchFilmResult';

export const MainPage = () => {
  const [resultOfSearch, setResultOfSearch] = useState([]);
  const [isClassNameOfSearch, setClassNameOfSearch] = useState(false);

  return (
    <>
      <Header
        updateClassStatus={setClassNameOfSearch}
        updateDataSearch={setResultOfSearch}
      />
      <SearchFilmResult
        isActiveBlock={isClassNameOfSearch}
        foundResultsOfSearch={resultOfSearch}
      />
      <UserMenu/>
      <Films/>
      <Footer/>
    </>
  )
};
