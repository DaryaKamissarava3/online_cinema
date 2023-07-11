import React, {useState} from 'react';

import './AdminPage.css';
import { Header } from '../../components/SharedComponents/Header';
import { SearchFilmResult } from '../../components/SharedComponents/SearchFilmResult';
import { AdminNavigation } from './AdminComponents/AdminNavigation';

export const AdminPage = () => {
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
      <AdminNavigation />
    </>
  );
};
