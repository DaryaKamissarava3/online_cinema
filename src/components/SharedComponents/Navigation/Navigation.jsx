import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';

import { Header } from '../Header';
import { Button } from '../Button';

import './Navigation.css';

export const Navigation = () => {
  const isAuth = useSelector((state) => state.auth.isLoggedIn === true);

  return (
    <div className=" navigation__container">
      <div className="navigation">
        {!isAuth &&
          <Link to="/login" className="nav-login">
            <Button className="nav__btn" btnText="Sign in"/>
          </Link>
        }
        {!isAuth &&
          <Link to="/registration" className="nav-registration">
            <Button className="nav__btn" btnText="Registration"/>
          </Link>
        }
        { isAuth && <Header /> }
      </div>
    </div>
  );
};
