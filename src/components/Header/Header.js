import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Button, Container} from '@mui/material';

import {authStatuses} from '../../constants/authStatuses';
import {deleteUser, setAuthStatus} from '../../store/actions';

import {Search} from '../Search';

import './Header.css';

export const Header = () => {
  const loggedIn = useSelector((state) => state.auth.status === authStatuses.loggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setAuthStatus(authStatuses.loggedOut));
    dispatch(deleteUser());
  }

  return (
    <Container maxWidth="false" className="header__container">
      <nav className="header__navigation">
        <div className="nav__block">
          <h1 className="header__logo">LOGO</h1>
        </div>
        <div className="nav__block">
          <span className="nav__block__item">
            <Search/>
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

