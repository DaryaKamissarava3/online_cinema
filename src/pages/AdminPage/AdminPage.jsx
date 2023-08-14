import React, {useState} from 'react';

import { AdminNavigation } from './AdminComponents/AdminNavigation';
import { SearchFilmResult } from '../../components/SharedComponents/SearchFilmResult';
import { ModalForSearch } from "../../components/SharedComponents/ModalForSearch";

export const AdminPage = () => {
  const [resultOfSearch, setResultOfSearch] = useState([]);
  const [isClassNameOfSearch, setClassNameOfSearch] = useState(false);

  return (
    <>
      <AdminNavigation />
      <ModalForSearch
        updateClassStatus={setClassNameOfSearch}
        updateDataSearch={setResultOfSearch}
      />
      <SearchFilmResult
        isActiveBlock={isClassNameOfSearch}
        foundResultsOfSearch={resultOfSearch}
      />
    </>
  );
};
