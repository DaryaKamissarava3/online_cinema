import React from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AdminPage } from '../pages/AdminPage';
import { Login } from '../pages/Login';
import { Registration } from '../pages/Registration';
import { MainPage } from './UserComponents/MainPage';
import { AddFilms } from '../pages/AdminPage/AdminComponents/AddFilms';
import { Films } from './SharedComponents/Films';
import { FilmDetails } from './SharedComponents/FilmDetails';
import { UserTickets } from './UserComponents/UserTickets';
import { UserAccount } from './UserComponents/UserAccount';
import { About } from '../pages/About';
import { NavBar } from './SharedComponents/NavBar';
import { UsersTable } from '../pages/AdminPage/AdminComponents/UsersTable';

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      contrastText: '#ffffff',
      main:'#3f51b5',
      dark:'#2c387e',
    },
    secondary: {
      light:'#db5858',
      main: '#d32f2f',
      dark:'#932020',
      contrastText: '#fafafa',
    },

  },
});

function App() {
  const loggedOut = useSelector((state) => state.auth.isLoggedIn !== true);
  const userRole = useSelector((state) => state.user.user.role);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar/>
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
              <Route path="/admin/view-users" element={<UsersTable />}/>
              <Route path="/admin/films" element={<Films/>}/>
              <Route path="films/:id" element={<FilmDetails/>}/>
            </>
          ) : (
            <>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/tickets" element={<UserTickets/>}/>
              <Route path="/account" element={<UserAccount/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="films/:id" element={<FilmDetails/>}/>
              <Route path="*" element={<Navigate to="/" replace={true}/>}/>
            </>
          )}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
