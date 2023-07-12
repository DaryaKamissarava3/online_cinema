import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Header } from '../Header';

import './Navigation.css';

export const Navigation = () => {
  const isAuth = useSelector((state) => state.auth.isLoggedIn === true);

  return (
    <div className=" navigation__container">
      <div className="navigation">
        {!isAuth &&
          <Button variant="outlined" className="nav__btn">
            <Link to="/login" className="nav-login">Sign in</Link>
          </Button>
        }
        {!isAuth &&
          <Button variant="outlined" className="nav__btn">
            <Link to="/registration" className="nav-registration">Registration</Link>
          </Button>
        }
        { isAuth && <Header /> }
      </div>
    </div>
  );
};
