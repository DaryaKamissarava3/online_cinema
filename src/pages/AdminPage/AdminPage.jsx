import React, {useState} from 'react';

import './AdminPage.css';
import { SearchFilmResult } from '../../components/SharedComponents/SearchFilmResult';
import { AdminNavigation } from './AdminComponents/AdminNavigation';

export const AdminPage = () => {
  const [resultOfSearch, setResultOfSearch] = useState([]);
  const [isClassNameOfSearch, setClassNameOfSearch] = useState(false);

  return (
    <>
      <SearchFilmResult
        isActiveBlock={isClassNameOfSearch}
        foundResultsOfSearch={resultOfSearch}
      />
      <AdminNavigation />
    </>
  );
};
