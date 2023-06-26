import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Button, Container} from '@mui/material';
import {authStatuses} from '../../constants/authStatuses';
import {setAuthStatus} from '../../store/actions';
import {Link} from 'react-router-dom';
import {Search} from '../Search';
import './Header.css';

export const Header = () => {
  const loggedIn = useSelector((state) => state.auth.status === authStatuses.loggedIn);
  const dispatch = useDispatch();

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
               onClick={() => dispatch(setAuthStatus(authStatuses.loggedOut))}
               className="navbar__login"
             >
               Sign Out
             </Button>
           }
          </span>
          <span className="nav__block__item">
            <Link to={`/register`}>
              <Button variant="outlined">Registration</Button>
            </Link>
          </span>
        </div>
      </nav>
    </Container>
  );
};

