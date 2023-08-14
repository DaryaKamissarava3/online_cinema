import React, { useState } from 'react';

import { Films } from '../../SharedComponents/Films';
import { Footer } from '../../SharedComponents/Footer';
import { ModalForSearch} from '../../SharedComponents/ModalForSearch';
import { MovieSlider } from '../../SharedComponents/MovieSlider';
import { NewsSection } from '../../SharedComponents/NewsSection';
import { SearchFilmResult } from '../../SharedComponents/SearchFilmResult';
import { TagsSection } from '../../SharedComponents/TagsSection';
import { UserMenu } from '../UserMenu';

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
