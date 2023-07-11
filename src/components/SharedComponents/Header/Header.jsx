import React from 'react';
import { Button, Container } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Search } from '../Search';

import { logoutUser } from '../../../store/actions/authActions';

import './Header.css';

export const Header = () => {
  const loggedIn = useSelector((state) => state.auth.isLoggedIn === true);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
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
            <Search />
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
