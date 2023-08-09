import React, { useState } from 'react';
import { Footer } from '../../SharedComponents/Footer';
import { Films } from '../../SharedComponents/Films';
import { UserMenu } from '../UserMenu';
import { SearchFilmResult } from '../../SharedComponents/SearchFilmResult';
import { MovieSlider } from '../../SharedComponents/MovieSlider';
import { TagsSection } from '../../SharedComponents/TagsSection';
import { NewsSection } from '../../SharedComponents/NewsSection';


export const MainPage = () => {
  const [resultOfSearch, setResultOfSearch] = useState([]);
  const [isClassNameOfSearch, setClassNameOfSearch] = useState(false);

  return (
    <>
      <SearchFilmResult
        isActiveBlock={isClassNameOfSearch}
        foundResultsOfSearch={resultOfSearch}
      />
      <MovieSlider />
      <UserMenu />
      <Films />
      <TagsSection />
      <NewsSection />
      <Footer />
    </>
  )
};
