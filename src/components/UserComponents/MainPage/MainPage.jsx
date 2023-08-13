import React, { useState } from 'react';
import { Footer } from '../../SharedComponents/Footer';
import { Films } from '../../SharedComponents/Films';
import { UserMenu } from '../UserMenu';
import { SearchFilmResult } from '../../SharedComponents/SearchFilmResult';
import { MovieSlider } from '../../SharedComponents/MovieSlider';
import { TagsSection } from '../../SharedComponents/TagsSection';
import { NewsSection } from '../../SharedComponents/NewsSection';
import { ModalForSearch} from '../../SharedComponents/ModalForSearch';


export const MainPage = () => {
  const [resultOfSearch, setResultOfSearch] = useState([]);
  const [isClassNameOfSearch, setClassNameOfSearch] = useState(false);

  return (
    <>
      <MovieSlider />
      <UserMenu />
      <ModalForSearch
        updateClassStatus={setClassNameOfSearch}
        updateDataSearch={setResultOfSearch}
      />
      <SearchFilmResult
        isActiveBlock={isClassNameOfSearch}
        foundResultsOfSearch={resultOfSearch}
      />
      <Films />
      <TagsSection />
      <NewsSection />
      <Footer />
    </>
  )
};
