import React, { useState } from 'react';
import { Button, Container, Input } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { logoutUser } from '../../../store/actions/authActions';

import './Header.css';

export const Header = ({updateClassStatus, updateDataSearch}) => {
  const [searchValue, setSearchValue] = useState('');

  const films = useSelector((state) => state.film.films);
  const loggedIn = useSelector((state) => state.auth.isLoggedIn === true);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleInput = (event) => {
    setSearchValue(event.target.value);
  };

  const findMatchesInArray = (value) => {
    const string = value.toString().toLowerCase();
    return films.filter((item) => item.title.toLowerCase().includes(string));
  };

  const handleSearch = () => {
    const res = findMatchesInArray(searchValue);
    if (res.length === 0) {
      alert('No films found');
      return;
    }
    updateClassStatus((prevState) => !prevState);
    updateDataSearch(res);
  };

  return (
    <Container maxWidth="false" className="header__container">
      <nav className="header__navigation">
        <div className="nav__block">
          <Link className="main__logo__link" to='`/`'>
            <h1>LOGO</h1>
          </Link>
        </div>
        <div className="nav__block">
          <span className="nav__block__item">
            <div>
      <Input
        type="text"
        placeholder="Search films"
        onChange={handleInput}
      />
      <Button
        onClick={handleSearch}
        variant="outlined"
      >
        Search
      </Button>
    </div>
          </span>
          <span className="nav__block__item">
            {loggedIn &&
              <Button
                onClick={handleLogout}
                className="navbar__login"
              >
                Sign Out
              </Button>
            }
          </span>
        </div>
      </nav>
    </Container>
  );
};
