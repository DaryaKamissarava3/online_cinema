import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {Navigation} from './Navigation';
import {AdminPage} from '../pages/AdminPage';
import {Login} from '../pages/Login';
import {Registration} from '../pages/Registration';
import {MainPage} from '../pages/MainPage';
import {AddFilms} from './AddFilms';
import {ViewUsers} from './ViewUsers';
import {Films} from './Films';
import {FilmDetails} from './FilmDetails';

function App() {
  const loggedOut = useSelector((state) => state.auth.isLoggedIn !== true);
  const userRole = useSelector((state) => state.user.user.role);

  return (
    <BrowserRouter>
      <div className="app">
        <Navigation/>
        <div className="wrap">
          <Routes>
            {loggedOut ? (
              <>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<Navigate to="/login" replace={true}/>}/>
              </>
            ) : userRole === 'admin' ? (
              <>
                <Route path="*" element={<Navigate to="/admin" replace={true}/>}/>
                <Route path="/admin" element={<AdminPage/>}/>
                <Route path="/admin/add-films" element={<AddFilms/>}/>
                <Route path="/admin/view-users" element={<ViewUsers/>}/>
                <Route path="/admin/films" element={<Films/>}/>
                <Route path="films/:id" element={<FilmDetails/>}/>
              </>
            ) : (
              <>
                <Route path="/" element={<MainPage/>}/>
                <Route path="*" element={<Navigate to="/" replace={true}/>}/>
              </>
            )}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

